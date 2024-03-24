"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var findPrimaryPaletteIndex = function findPrimaryPaletteIndex(palettes) {
  var index = palettes.palettes.findIndex(function (palette) {
    return palette.name === palettes.primaryPalette;
  });
  return index >= 0 ? index : undefined;
};
var _default = exports["default"] = findPrimaryPaletteIndex;