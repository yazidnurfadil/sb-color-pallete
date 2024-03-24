"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _react2 = require("@emotion/react");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _hooks = require("../../hooks");
var _list = _interopRequireDefault(require("./list"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /** @jsx jsx */
var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
    items = _ref.items,
    itemProps = _ref.itemProps,
    itemComponent = _ref.itemComponent,
    closeOnItemClick = _ref.closeOnItemClick,
    renderList = _ref.renderList,
    onLabelClick = _ref.onLabelClick,
    onItemClick = _ref.onItemClick;
  var _useTheme = (0, _hooks.useTheme)(),
    theme = _useTheme.theme;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  (0, _react.useEffect)(function () {
    var colorPicker = document.getElementById('color-picker');
    var handleScroll = function handleScroll() {
      setActive(false);
    };
    if (colorPicker && active) {
      colorPicker.addEventListener('scroll', handleScroll);
    }
    return function () {
      if (colorPicker) {
        colorPicker.removeEventListener('scroll', handleScroll);
      }
    };
  }, [active]);
  var closeList = (0, _react.useCallback)(function () {
    setActive(false);
  }, []);
  var wrapperRef = (0, _hooks.useOutsideClick)(closeList);
  var toggleActive = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    setActive(!active);
    onLabelClick === null || onLabelClick === void 0 || onLabelClick(!active);
  }, [active, onLabelClick]);
  var handleItemClick = (0, _react.useCallback)(function (item, index) {
    if (closeOnItemClick) {
      closeList();
    }
    onItemClick(item, index);
  }, [closeOnItemClick, closeList, onItemClick]);
  var showList = renderList === 'always' || renderList === '>1' && items.length > 1;
  return (0, _react2.jsx)("div", {
    ref: wrapperRef,
    css: (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        display: inline-block;\n      "]))),
    "data-testid": "dropdown"
  }, (0, _react2.jsx)("button", {
    "data-testid": "dropdownButton",
    onClick: toggleActive,
    css: (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          background-color: transparent;\n          border: none;\n          font-size: 1.1em;\n          padding: 0;\n\n          ", "\n        "])), renderList && "&:hover {\n            cursor: pointer;\n          }")
  }, (0, _react2.jsx)("p", {
    "data-testid": "dropdownLabel",
    css: (0, _react2.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            display: inline;\n            margin-right: 0.5em;\n          "])))
  }, label), showList && (0, _react2.jsx)(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronDown,
    color: theme.text.primary,
    "data-testid": "dropdownChevron"
  })), showList && (0, _react2.jsx)(_list["default"], {
    active: active,
    items: items,
    itemProps: itemProps,
    itemComponent: itemComponent,
    onItemClick: handleItemClick,
    testId: "dropdownList"
  }));
};
Dropdown.defaultProps = {
  label: null,
  items: null,
  itemComponent: null,
  closeOnItemClick: false,
  renderList: 'always',
  onLabelClick: function onLabelClick() {},
  onItemClick: function onItemClick() {}
};
var _default = exports["default"] = Dropdown;