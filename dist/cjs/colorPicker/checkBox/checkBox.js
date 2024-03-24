"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("@emotion/react");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _hooks = require("../../hooks");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
/** @jsx jsx */
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CheckBox = function CheckBox(_ref) {
  var label = _ref.label,
    checked = _ref.checked,
    onClick = _ref.onClick;
  var _useTheme = (0, _hooks.useTheme)(),
    theme = _useTheme.theme;
  return (0, _react.jsx)("div", {
    onClick: onClick,
    css: (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        display: flex;\n        align-items: center;\n\n        &:hover {\n          cursor: pointer;\n        }\n      "])))
  }, (0, _react.jsx)("div", {
    css: (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border: ", ";\n          border-radius: 0.2em;\n          width: 1.3em;\n          height: 1.3em;\n          margin-right: 0.5em;\n        "])), "1px solid ".concat(theme.border.secondary))
  }, (0, _react.jsx)(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCheck,
    css: (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            path {\n              color: ", ";\n            }\n          "])), checked ? "".concat(theme.text.primary) : 'transparent')
  })), label && (0, _react.jsx)("p", {
    css: (0, _react.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            font-size: 1.1em;\n            line-height: 1em;\n            margin: 0;\n            white-space: nowrap;\n          "])))
  }, label));
};
var _default = exports["default"] = CheckBox;