"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _validateArrayPalette = _interopRequireDefault(require("./validateArrayPalette"));
var _validateObjectColors = _interopRequireDefault(require("./validateObjectColors"));
var _validateShade = _interopRequireDefault(require("./validateShade"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  validateArrayPalette: _validateArrayPalette["default"],
  validateObjectColors: _validateObjectColors["default"],
  validateShade: _validateShade["default"]
};