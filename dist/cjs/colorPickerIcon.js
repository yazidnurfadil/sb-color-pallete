"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _managerApi = require("@storybook/manager-api");
var _components = require("@storybook/components");
var _constants = require("./constants");
var _colorPicker = _interopRequireDefault(require("./colorPicker/colorPicker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ColorPickerIcon = function ColorPickerIcon() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var colorPicker = (0, _managerApi.useParameter)('colorPicker');
  var colorPalettes = (0, _managerApi.useParameter)('colorPalettes');
  var disableDefaultPalettes = (colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.disableDefaultPalettes) || (colorPalettes === null || colorPalettes === void 0 ? void 0 : colorPalettes.disableDefaultPalettes);
  var palettes = (colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.palettes) || (colorPalettes === null || colorPalettes === void 0 ? void 0 : colorPalettes.palettes);
  var toggleColorPicker = (0, _react.useCallback)(function (visible) {
    if (visible !== isActive) {
      setIsActive(!isActive);
    }
  }, [isActive]);
  if (!(palettes !== null && palettes !== void 0 && palettes.length) && disableDefaultPalettes) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement(_components.WithTooltip, {
    placement: "bottom",
    trigger: "click",
    defaultVisible: true,
    tooltip: /*#__PURE__*/_react["default"].createElement(_colorPicker["default"], null),
    closeOnOutsideClick: true,
    onVisibleChange: toggleColorPicker
  }, /*#__PURE__*/_react["default"].createElement(_components.IconButton, {
    key: _constants.TOOL_ID,
    active: isActive,
    title: "Color palettes"
  }, /*#__PURE__*/_react["default"].createElement(_components.Icons, {
    icon: "paintbrush"
  })));
};
var _default = exports["default"] = ColorPickerIcon;