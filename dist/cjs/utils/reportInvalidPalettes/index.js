"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _messages = require("../transformPalette/messages");
var reportInvalidPalettes = function reportInvalidPalettes(palettes) {
  palettes.forEach(function (palette) {
    var invalidColors = [];
    palette.invalidColors.forEach(function (c) {
      c.values.forEach(function (s) {
        invalidColors.push("".concat(c.label, " -> ").concat(s.value.toString()));
      });
    });
    (0, _messages.warn)((0, _messages.getInvalidPaletteMessage)(invalidColors, palette.name));
  });
};
var _default = exports["default"] = reportInvalidPalettes;