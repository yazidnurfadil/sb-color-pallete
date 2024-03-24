"use strict";

var _testsUtils = require("src/utils/testsUtils");
var _ = _interopRequireDefault(require("."));
var _validateArrayPalette = _interopRequireDefault(require("../../validation/validateArrayPalette"));
var _transformShades = _interopRequireDefault(require("../transformShades"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('../../validation/validateArrayPalette');
jest.mock('../transformShades');
describe('transformArrayPalette', function () {
  var validateArrayPaletteMock = _validateArrayPalette["default"];
  var transformShadesMock = _transformShades["default"];
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('returns transformed palette correctly', function () {
    validateArrayPaletteMock.mockReturnValue(_testsUtils.paletteAsArray);
    transformShadesMock.mockReturnValueOnce(_testsUtils.transformedLightArray.values).mockReturnValueOnce(_testsUtils.transformedDarkArray.values).mockReturnValueOnce(_testsUtils.transformedWhiteArray.values);
    var output = (0, _["default"])(_testsUtils.paletteAsArray);
    expect(validateArrayPaletteMock).toBeCalledTimes(1);
    expect(validateArrayPaletteMock).toBeCalledWith(_testsUtils.paletteAsArray);
    expect(transformShadesMock).toHaveBeenNthCalledWith(1, _testsUtils.lightArray.values);
    expect(transformShadesMock).toHaveBeenNthCalledWith(2, _testsUtils.darkArray.values);
    expect(transformShadesMock).toHaveBeenNthCalledWith(3, _testsUtils.whiteArray.values);
    expect(output).toEqual(_testsUtils.statePalette);
  });
  it('returns empty palette array when no valid colors', function () {
    validateArrayPaletteMock.mockReturnValue({
      name: 'foo',
      palette: [],
      invalidColors: []
    });
    var output = (0, _["default"])(_testsUtils.paletteAsArray);
    expect(validateArrayPaletteMock).toBeCalledTimes(1);
    expect(validateArrayPaletteMock).toBeCalledWith(_testsUtils.paletteAsArray);
    expect(transformShadesMock).not.toBeCalled();
    expect(output).toEqual({
      name: 'foo',
      palette: [],
      invalidColors: []
    });
  });
});