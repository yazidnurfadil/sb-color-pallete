"use strict";

var _testsUtils = require("../../../testsUtils");
var _validateShade = _interopRequireDefault(require("../validateShade"));
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('../validateShade');
describe('validateObjectColors', function () {
  var validateShadeMock = _validateShade["default"];
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('calls validateShade correctly when value as string', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(_testsUtils.whiteObject)[0];
    (0, _["default"])(color[0], color[1]);
    expect(_validateShade["default"]).toHaveBeenCalledTimes(1);
    expect(_validateShade["default"]).toHaveBeenCalledWith('#fff');
  });
  it('calls validateShade correctly when value as object', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(_testsUtils.lightObject)[0];
    (0, _["default"])(color[0], color[1]);
    expect(_validateShade["default"]).toHaveBeenCalledTimes(2);
    expect(_validateShade["default"]).toHaveBeenNthCalledWith(1, '#fff');
    expect(_validateShade["default"]).toHaveBeenNthCalledWith(2, '#eee');
  });
  it('returns transformed colors correctly when value as string', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(_testsUtils.whiteObject)[0];
    var output = (0, _["default"])(color[0], color[1]);
    var expected = {
      palette: _testsUtils.whiteArray
    };
    expect(output).toEqual(expected);
  });
  it('returns incorrect color when incorrect value as string', function () {
    validateShadeMock.mockReturnValue(false);
    var color = Object.entries(_testsUtils.whiteObject)[0];
    var output = (0, _["default"])(color[0], color[1]);
    var expected = {
      invalidColors: _testsUtils.whiteArray
    };
    expect(output).toEqual(expected);
  });
  it('returns transformed colors correctly when value as object', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(_testsUtils.lightObject)[0];
    var output = (0, _["default"])(color[0], color[1]);
    var expected = {
      palette: _testsUtils.lightArray
    };
    expect(_validateShade["default"]).toHaveBeenCalledTimes(2);
    expect(output).toEqual(expected);
  });
  it('returns transformed colors correctly when one incorrect object value', function () {
    validateShadeMock.mockReturnValueOnce(false).mockReturnValue(true);
    var color = Object.entries(_testsUtils.lightObject)[0];
    var expected = {
      palette: {
        label: 'light',
        values: [{
          label: '200',
          value: '#eee'
        }]
      },
      invalidColors: {
        label: 'light',
        values: [{
          label: '100',
          value: '#fff'
        }]
      }
    };
    var output = (0, _["default"])(color[0], color[1]);
    expect(_validateShade["default"]).toHaveBeenCalledTimes(2);
    expect(output).toEqual(expected);
  });
  it('returns only incorrect colors when no correct object values', function () {
    validateShadeMock.mockReturnValue(false);
    var color = Object.entries(_testsUtils.lightObject)[0];
    var output = (0, _["default"])(color[0], color[1]);
    var expected = {
      invalidColors: _testsUtils.lightArray
    };
    expect(_validateShade["default"]).toHaveBeenCalledTimes(2);
    expect(output).toEqual(expected);
  });
});