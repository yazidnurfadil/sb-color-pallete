"use strict";

var _testsUtils = require("../testsUtils");
var _ = _interopRequireDefault(require("."));
var _validateArrayPalette = _interopRequireDefault(require("./validation/validateArrayPalette"));
var _transformObjectPalette = _interopRequireDefault(require("./transformation/transformObjectPalette"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('./validation/validateArrayPalette');
jest.mock('./transformation/transformObjectPalette');
describe('transformPalette', function () {
  var validateArrayPaletteMock = _validateArrayPalette["default"];
  var transformObjectPaletteMock = _transformObjectPalette["default"];
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('return transformed palette when palette as array', function () {
    validateArrayPaletteMock.mockReturnValue(_testsUtils.statePalette);
    var output = (0, _["default"])(_testsUtils.paletteAsArray);
    expect(_transformObjectPalette["default"]).not.toHaveBeenCalled();
    expect(_validateArrayPalette["default"]).toHaveBeenCalledTimes(1);
    expect(_validateArrayPalette["default"]).toHaveBeenCalledWith(_testsUtils.paletteAsArray);
    expect(output).toEqual(_testsUtils.statePalette);
  });
  it('return transformed palette when palette as object', function () {
    transformObjectPaletteMock.mockReturnValue(_testsUtils.statePalette);
    var output = (0, _["default"])(_testsUtils.paletteAsObject);
    expect(_validateArrayPalette["default"]).not.toHaveBeenCalled();
    expect(_transformObjectPalette["default"]).toHaveBeenCalledTimes(1);
    expect(_transformObjectPalette["default"]).toHaveBeenCalledWith(_testsUtils.paletteAsObject);
    expect(output).toEqual(_testsUtils.statePalette);
  });
});