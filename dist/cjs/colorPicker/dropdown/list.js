"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _react2 = require("@emotion/react");
var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));
var _hooks = require("../../hooks");
var _templateObject, _templateObject2, _templateObject3;
/** @jsx jsx */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var List = function List(_ref) {
  var active = _ref.active,
    items = _ref.items,
    itemProps = _ref.itemProps,
    itemComponent = _ref.itemComponent,
    onItemClick = _ref.onItemClick,
    testId = _ref.testId;
  var _useTheme = (0, _hooks.useTheme)(),
    theme = _useTheme.theme,
    commonTheme = _useTheme.commonTheme;
  var ItemComponent = itemComponent;
  var getListItems = (0, _react.useCallback)(function () {
    return items.map(function (item, i) {
      var handleClick = function handleClick() {
        onItemClick(item, i);
      };
      var backgroundColor = itemProps.current === i ? theme.background.selected : 'transparent';
      var backgroundColorHover = itemProps.current === i ? theme.background.selected : theme.background.hover;
      return (0, _react2.jsx)("div", {
        key: i,
        onClick: handleClick,
        css: (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n              background-color: ", ";\n              padding: 0;\n              border: none;\n              width: 100%;\n              display: block;\n              padding: 0.5em;\n              border-bottom: ", ";\n\n              &:hover {\n                cursor: pointer;\n                background-color: ", ";\n              }\n\n              &:last-of-type {\n                border: none;\n              }\n            "])), "".concat(backgroundColor), "1px solid ".concat(theme.border.tertiary), backgroundColorHover)
      }, (0, _react2.jsx)(ItemComponent, {
        item: item,
        itemProps: itemProps,
        index: i,
        key: i
      }));
    });
  }, [items, itemProps, theme, ItemComponent, onItemClick]);
  return (0, _react2.jsx)("div", {
    css: (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        position: fixed;\n      "]))),
    "data-testid": testId
  }, (0, _react2.jsx)(_reactAnimateHeight["default"], {
    height: active ? 'auto' : 0
  }, (0, _react2.jsx)("div", {
    css: (0, _react2.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            box-shadow: ", ";\n            background-color: ", ";\n            border-radius: 0.5em;\n            margin: 0.25em;\n            max-height: 200px;\n            overflow-x: hidden;\n            overflow-y: auto;\n            &::-webkit-scrollbar {\n              width: 0.5em;\n              height: 0.5em;\n            }\n            &::-webkit-scrollbar-track {\n              background: ", ";\n            }\n            &::-webkit-scrollbar-thumb {\n              background: ", ";\n              border-radius: 0.25em;\n              &:hover {\n                background-color: ", ";\n              }\n            }\n          "])), "0px 0px 4px 1px ".concat(theme.shadow.primary), "".concat(theme.background.secondary), "".concat(commonTheme.scrollBar.track), "".concat(commonTheme.scrollBar.thumb), "".concat(commonTheme.scrollBar.thumbHover))
  }, getListItems())));
};
var _default = exports["default"] = List;