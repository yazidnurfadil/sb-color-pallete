"use strict";

var _testsUtils = require("src/utils/testsUtils");
var _validateShade = _interopRequireDefault(require("../validateShade"));
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('../validateShade');
describe('validateArrayPalette', function () {
  var validateShadeMock = _validateShade["default"];
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('validates all shades', function () {
    validateShadeMock.mockReturnValue(true);
    (0, _["default"])(_testsUtils.paletteAsArray);
    expect(_validateShade["default"]).toHaveBeenCalledTimes(5);
    expect(_validateShade["default"]).toHaveBeenNthCalledWith(1, '#fff');
    expect(_validateShade["default"]).toHaveBeenNthCalledWith(2, '#eee');
    expect(_validateShade["default"]).toHaveBeenNthCalledWith(3, '#000');
    expect(_validateShade["default"]).toHaveBeenNthCalledWith(4, '#111');
    expect(_validateShade["default"]).toHaveBeenNthCalledWith(5, '#fff');
  });
  it('gets invalid messages and calls warn', function () {
    validateShadeMock.mockReturnValue(false);
    (0, _["default"])(_testsUtils.paletteAsArray);
  });
  it('returns transformed palette correctly', function () {
    validateShadeMock.mockReturnValue(true);
    var expected = {
      name: 'foo',
      palette: [_testsUtils.lightArray, _testsUtils.darkArray, _testsUtils.whiteArray],
      invalidColors: []
    };
    var output = (0, _["default"])(_testsUtils.paletteAsArray);
    expect(output).toEqual(expected);
  });
  it('returns transformed palette correctly when invalid shade', function () {
    validateShadeMock.mockReturnValueOnce(false).mockReturnValue(true);
    var output = (0, _["default"])(_testsUtils.paletteAsArray);
    var expected = {
      name: 'foo',
      palette: [{
        label: 'light',
        values: [{
          label: '200',
          value: '#eee'
        }]
      }, _testsUtils.darkArray, _testsUtils.whiteArray],
      invalidColors: [{
        label: _testsUtils.paletteAsArray.palette[0].label,
        values: [_testsUtils.paletteAsArray.palette[0].values[0]]
      }]
    };
    expect(output).toEqual(expected);
  });
  it('returns transformed palette correctly when invalid all color shades', function () {
    validateShadeMock.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValue(true);
    var output = (0, _["default"])(_testsUtils.paletteAsArray);
    var expected = {
      name: 'foo',
      palette: [_testsUtils.darkArray, _testsUtils.whiteArray],
      invalidColors: [_testsUtils.lightArray]
    };
    expect(output).toEqual(expected);
  });
  it('returns no palettes whe no valid shades', function () {
    validateShadeMock.mockReturnValue(false);
    var output = (0, _["default"])(_testsUtils.paletteAsArray);
    var expected = {
      name: 'foo',
      palette: [],
      invalidColors: [_testsUtils.lightArray, _testsUtils.darkArray, _testsUtils.whiteArray]
    };
    expect(output).toEqual(expected);
  });
});