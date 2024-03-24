"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPalettes = exports.TOOL_ID = exports.ADDON_ID = void 0;
var _basic = _interopRequireDefault(require("./defaultPalettes/basic"));
var _colorful = _interopRequireDefault(require("./defaultPalettes/colorful"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var defaultPalettes = exports.defaultPalettes = [_basic["default"], _colorful["default"]];
var ADDON_ID = exports.ADDON_ID = 'color-picker';
var TOOL_ID = exports.TOOL_ID = "".concat(ADDON_ID, "/tool");