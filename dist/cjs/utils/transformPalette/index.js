"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _transformArrayPalette = _interopRequireDefault(require("./transformation/transformArrayPalette"));
var _transformObjectPalette = _interopRequireDefault(require("./transformation/transformObjectPalette"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var transformPalette = function transformPalette(paletteObj) {
  if (Array.isArray(paletteObj.palette)) {
    return (0, _transformArrayPalette["default"])(paletteObj);
  }
  return (0, _transformObjectPalette["default"])(paletteObj);
};
var _default = exports["default"] = transformPalette;