"use strict";

var _testsUtils = require("src/utils/testsUtils");
var _ = _interopRequireDefault(require("."));
var _getTextColor = _interopRequireDefault(require("../getTextColor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('../getTextColor');
describe('transformShades', function () {
  var getTextColorMock = jest.mocked(_getTextColor["default"]);
  it('transforms shades correctly', function () {
    getTextColorMock.mockReturnValue('#000000');
    var output = (0, _["default"])(_testsUtils.lightArray.values);
    expect(output).toEqual(_testsUtils.transformedLightArray.values);
  });
});