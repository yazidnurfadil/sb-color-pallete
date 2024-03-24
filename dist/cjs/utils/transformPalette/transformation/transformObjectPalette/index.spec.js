"use strict";

var _testsUtils = require("src/utils/testsUtils");
var _ = _interopRequireDefault(require("."));
var _validateObjectColors = _interopRequireDefault(require("../../validation/validateObjectColors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('../../validation/validateObjectColors');
describe('transformObjectPalette', function () {
  var validateObjectColorsMock = _validateObjectColors["default"];
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('returns transformed palette correctly', function () {
    validateObjectColorsMock.mockReturnValueOnce({
      palette: _testsUtils.lightArray
    }).mockReturnValueOnce({
      palette: _testsUtils.darkArray
    }).mockReturnValueOnce({
      palette: _testsUtils.whiteArray
    });
    var output = (0, _["default"])(_testsUtils.paletteAsObject);
    var expected = {
      name: 'bar',
      palette: [_testsUtils.transformedLightArray, _testsUtils.transformedDarkArray, _testsUtils.transformedWhiteArray],
      invalidColors: []
    };
    expect(_validateObjectColors["default"]).toHaveBeenCalledTimes(3);
    expect(output).toEqual(expected);
  });
  it('returns transformed palette correctly when values of one color are invalid', function () {
    validateObjectColorsMock.mockReturnValueOnce({
      invalidColors: _testsUtils.lightArray
    }).mockReturnValueOnce({
      palette: _testsUtils.darkArray
    }).mockReturnValueOnce({
      palette: _testsUtils.whiteArray
    });
    var output = (0, _["default"])(_testsUtils.paletteAsObject);
    var expected = {
      name: 'bar',
      palette: [_testsUtils.transformedDarkArray, _testsUtils.transformedWhiteArray],
      invalidColors: [_testsUtils.lightArray]
    };
    expect(_validateObjectColors["default"]).toHaveBeenCalledTimes(3);
    expect(output).toEqual(expected);
  });
  it('returns correctly when values of all colors are invalid', function () {
    validateObjectColorsMock.mockReturnValueOnce({
      invalidColors: _testsUtils.lightArray
    }).mockReturnValueOnce({
      invalidColors: _testsUtils.darkArray
    }).mockReturnValueOnce({
      invalidColors: _testsUtils.whiteArray
    });
    var output = (0, _["default"])(_testsUtils.paletteAsObject);
    expect(_validateObjectColors["default"]).toHaveBeenCalledTimes(3);
    expect(output).toEqual({
      name: 'bar',
      palette: [],
      invalidColors: _testsUtils.paletteAsArray.palette
    });
  });
});