"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("@emotion/react");
var _shade = _interopRequireDefault(require("./shade"));
var _react2 = require("react");
var _hooks = require("../hooks");
var _templateObject;
/** @jsx jsx */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Colors = function Colors(_ref) {
  var colors = _ref.colors;
  var _useTheme = (0, _hooks.useTheme)(),
    theme = _useTheme.theme;
  var shades = (0, _react2.useMemo)(function () {
    return colors.values.map(function (shade, i) {
      return (0, _react.jsx)(_shade["default"], {
        shade: shade,
        key: "Shade_".concat(shade.value, "_").concat(i)
      });
    });
  }, [colors]);
  return (0, _react.jsx)("div", {
    css: (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        height: 100%;\n        border-bottom: ", ";\n      "])), "1px solid  ".concat(theme.border.tertiary))
  }, shades);
};
var _default = exports["default"] = Colors;