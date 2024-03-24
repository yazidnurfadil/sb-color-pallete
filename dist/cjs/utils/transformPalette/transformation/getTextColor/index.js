"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _chromaJs = _interopRequireDefault(require("chroma-js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getTextColor = function getTextColor(color) {
  var chromaColor = (0, _chromaJs["default"])(color);
  var alpha = chromaColor.alpha();
  var mixRatio = Math.pow(1 - alpha, 2);
  var whitened = _chromaJs["default"].mix(chromaColor, '#FFFFFF', mixRatio);
  var luminanceThreshold = 0.45;
  return whitened.luminance() > luminanceThreshold ? '#000000' : '#FFFFFF';
};
var _default = exports["default"] = getTextColor;