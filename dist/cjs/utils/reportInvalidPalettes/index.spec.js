"use strict";

var _ = _interopRequireDefault(require("."));
var _testsUtils = require("../testsUtils");
var _messages = require("../transformPalette/messages");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('../transformPalette/messages');
var getInvalidPaletteMessageMock = _messages.getInvalidPaletteMessage;
var warnMock = _messages.warn;
describe('reportInvalidPalettes', function () {
  getInvalidPaletteMessageMock.mockReturnValue('expected string');
  it('reports correctly', function () {
    (0, _["default"])(_testsUtils.invalidPaletteAsArray);
    var expectedInvalidColors = ['light -> #fff', 'light -> #eee'];
    expect(getInvalidPaletteMessageMock).toBeCalledTimes(1);
    expect(getInvalidPaletteMessageMock).toBeCalledWith(expectedInvalidColors, 'foo');
    expect(warnMock).toBeCalledTimes(1);
    expect(warnMock).toBeCalledWith('expected string');
  });
});