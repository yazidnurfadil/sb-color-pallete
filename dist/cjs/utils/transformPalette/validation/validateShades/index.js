"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _validateShade = _interopRequireDefault(require("../validateShade"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateShades = function validateShades(shades) {
  var validShades = [];
  var invalidShades = [];
  shades.forEach(function (shade) {
    var isValid = (0, _validateShade["default"])(shade.value);
    if (!isValid) {
      invalidShades.push(shade);
      return;
    }
    validShades.push(shade);
  });
  return {
    validShades: validShades,
    invalidShades: invalidShades
  };
};
var _default = exports["default"] = validateShades;