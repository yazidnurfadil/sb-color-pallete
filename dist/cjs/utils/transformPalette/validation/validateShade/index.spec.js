"use strict";

var _ = _interopRequireDefault(require("."));
var _chromaJs = _interopRequireDefault(require("chroma-js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('chroma-js', function () {
  return {
    valid: jest.fn()
  };
});
var validMock = _chromaJs["default"].valid;
describe('validateShade', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it.each([['true', 'valid', true, true], ['false', 'invalid', false, false]])('returns %p if color is %s', function (desc1, desc2, isValid, expected) {
    validMock.mockReturnValue(isValid);
    var output = (0, _["default"])('baz');
    expect(output).toBe(expected);
  });
});