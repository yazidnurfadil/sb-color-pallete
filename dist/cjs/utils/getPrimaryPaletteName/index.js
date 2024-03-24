"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var getPrimaryPaletteName = function getPrimaryPaletteName(statePalettes, primaryPaletteIndex) {
  if (!(statePalettes !== null && statePalettes !== void 0 && statePalettes.palettes.length)) {
    return null;
  }
  if (!primaryPaletteIndex) {
    return statePalettes.palettes[0].name;
  }
  return statePalettes.primaryPalette;
};
var _default = exports["default"] = getPrimaryPaletteName;