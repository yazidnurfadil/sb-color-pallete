"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _validateShades = _interopRequireDefault(require("../validateShades"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateArrayPalette = function validateArrayPalette(paletteObj) {
  var palette = paletteObj.palette;
  var invalidColors = [];
  var validatedPalette = palette.flatMap(function (p) {
    var shades = (0, _validateShades["default"])(p.values);
    if (shades.invalidShades.length) {
      invalidColors.push({
        label: p.label,
        values: shades.invalidShades
      });
    }
    if (!shades.validShades.length) {
      return [];
    }
    return {
      label: p.label,
      values: shades.validShades
    };
  });
  return {
    name: paletteObj.name,
    palette: validatedPalette,
    invalidColors: invalidColors
  };
};
var _default = exports["default"] = validateArrayPalette;