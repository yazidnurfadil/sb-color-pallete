"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("@emotion/react");
var _hooks = require("../../hooks");
var _templateObject;
/** @jsx jsx */
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Palette = function Palette(_ref) {
  var item = _ref.item,
    itemProps = _ref.itemProps,
    index = _ref.index;
  var _useTheme = (0, _hooks.useTheme)(),
    theme = _useTheme.theme;
  if (!item.palette) {
    return null;
  }
  var color = itemProps.current === index ? theme.text.selected : theme.text.primary;
  return (0, _react.jsx)("p", {
    css: (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        margin: 0;\n        font-size: 1.1em;\n        white-space: nowrap;\n        color: ", ";\n      "])), color)
  }, item.name || "Palette No".concat(index + 1));
};
var _default = exports["default"] = Palette;