"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _chromaJs = _interopRequireDefault(require("chroma-js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateShade = function validateShade(shade) {
  return _chromaJs["default"].valid(shade);
};
var _default = exports["default"] = validateShade;