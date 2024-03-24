"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _react2 = require("@emotion/react");
var _colors = _interopRequireDefault(require("./colors"));
var _hooks = require("../hooks");
var _templateObject, _templateObject2;
/** @jsx jsx */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Palette = function Palette(_ref) {
  var palette = _ref.palette;
  var _useTheme = (0, _hooks.useTheme)(),
    theme = _useTheme.theme;
  var colors = (0, _react.useMemo)(function () {
    return palette.map(function (c, i) {
      return (0, _react2.jsx)(_react.Fragment, {
        key: "Colors_".concat(c.label, "_").concat(i)
      }, (0, _react2.jsx)("p", {
        css: (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n              display: flex;\n              flex-wrap: wrap;\n              align-items: center;\n              font-size: 1.1em;\n              padding-right: 0.5em;\n              margin: 0;\n              text-transform: capitalize;\n              border-bottom: ", ";\n            "])), "1px solid  ".concat(theme.background.tertiary))
      }, c.label || 'Unnamed'), (0, _react2.jsx)(_colors["default"], {
        colors: c
      }));
    });
  }, [palette, theme]);
  return (0, _react2.jsx)("div", {
    css: (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        display: grid;\n        grid-template-columns: minmax(70px, min-content) auto;\n        grid-row-gap: 5px;\n      "])))
  }, colors);
};
var _default = exports["default"] = Palette;