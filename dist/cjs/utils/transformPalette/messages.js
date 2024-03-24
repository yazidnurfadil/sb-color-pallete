"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.getInvalidPaletteMessage = void 0;
var _joinStringList = _interopRequireDefault(require("../joinStringList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-console */

var getInvalidPaletteMessage = exports.getInvalidPaletteMessage = function getInvalidPaletteMessage(invalidColors, paletteName) {
  var list = (0, _joinStringList["default"])(invalidColors, 2, 'other invalid color');
  return "".concat(list, " detected in \"").concat(paletteName, "\" palette.");
};
var warn = exports.warn = function warn(message) {
  return console.warn("%cColor picker warning%c: ".concat(message), 'color: red');
};