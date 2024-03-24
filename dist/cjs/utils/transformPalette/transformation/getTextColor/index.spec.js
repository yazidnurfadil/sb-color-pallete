"use strict";

var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('chroma-js', function () {
  var chromaMock = function chromaMock() {
    return chromaMock.Color();
  };
  chromaMock.mockedColor = {
    luminance: jest.fn(),
    alpha: jest.fn()
  };
  chromaMock.Color = function () {
    return chromaMock.mockedColor;
  };
  chromaMock.mix = jest.fn(function () {
    return chromaMock.Color();
  });
  return chromaMock;
});
describe('getTextColor', function () {
  var chromaMock = jest.mocked(_chromaJs["default"]);
  var luminanceMock = chromaMock.mockedColor.luminance;
  var alphaMock = chromaMock.mockedColor.alpha;
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it.each([[0.6, '#000000'], [0.2, '#FFFFFF']])('returns text color correctly (luminance = %s)', function (luminance, expected) {
    luminanceMock.mockReturnValue(luminance);
    var output = (0, _["default"])('foo'); // Color is mocked

    expect(output).toEqual(expected);
  });
  it.each([[0, 1], [0.5, 0.25], [1, 0]])('mixes transparent colors with white (alpha = %s)', function (alpha, expected) {
    alphaMock.mockReturnValue(alpha);
    (0, _["default"])('foo'); // Color is mocked

    expect(_chromaJs["default"].mix).toHaveBeenCalledWith(chromaMock.mockedColor, '#FFFFFF', expected);
  });
});