"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _react2 = require("@emotion/react");
var _managerApi = require("@storybook/manager-api");
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
var _constants = require("../constants");
var _shadeTooltip = _interopRequireDefault(require("./shadeTooltip"));
var _reactPopperTooltip = require("react-popper-tooltip");
require("react-popper-tooltip/dist/styles.css");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /** @jsx jsx */
var Shade = function Shade(_ref) {
  var _addonState$storyStat;
  var shade = _ref.shade;
  var _useArgs = (0, _managerApi.useArgs)(),
    _useArgs2 = _slicedToArray(_useArgs, 2),
    updateArgs = _useArgs2[1];
  var state = (0, _managerApi.useStorybookState)();
  var _useAddonState = (0, _managerApi.useAddonState)(_constants.ADDON_ID),
    _useAddonState2 = _slicedToArray(_useAddonState, 1),
    addonState = _useAddonState2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var _usePopperTooltip = (0, _reactPopperTooltip.usePopperTooltip)({
      placement: 'top'
    }),
    getArrowProps = _usePopperTooltip.getArrowProps,
    getTooltipProps = _usePopperTooltip.getTooltipProps,
    setTooltipRef = _usePopperTooltip.setTooltipRef,
    setTriggerRef = _usePopperTooltip.setTriggerRef,
    visible = _usePopperTooltip.visible;
  var storyId = state.storyId;
  var storyState = addonState === null || addonState === void 0 || (_addonState$storyStat = addonState.storyStates) === null || _addonState$storyStat === void 0 ? void 0 : _addonState$storyStat[storyId];
  var colorPicker = (0, _managerApi.useParameter)('colorPicker') || {};
  var controlValueType = colorPicker.controlValueType;
  (0, _react.useEffect)(function () {
    var timeout;
    if (copied) {
      timeout = setTimeout(function () {
        setCopied(false);
      }, 750);
    }
    return function () {
      clearTimeout(timeout);
    };
  }, [copied]);
  var handleClick = (0, _react.useCallback)(function () {
    var newArgs = {};
    storyState.selectedControls.forEach(function (control) {
      newArgs[control] = shade[controlValueType || 'value'];
    });
    if (state.viewMode === 'story') {
      updateArgs(newArgs);
    }
    if (storyState.copyOnClick) {
      setCopied(true);
      (0, _copyToClipboard["default"])(shade.value);
    }
  }, [storyState.selectedControls, storyState.copyOnClick, state.viewMode, shade, controlValueType, updateArgs]);
  return (0, _react2.jsx)("div", null, (0, _react2.jsx)("div", {
    onClick: handleClick,
    ref: setTriggerRef,
    css: (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          width: 1.5em;\n          height: 1.5em;\n          margin: 0.3em;\n          border: 1px solid #ddd;\n          background-color: ", ";\n          &:hover {\n            cursor: copy;\n            > * {\n              display: block;\n            }\n          }\n        "])), shade.value)
  }), visible && (0, _react2.jsx)("div", _extends({
    ref: setTooltipRef
  }, getTooltipProps({
    className: 'tooltip-container'
  }), {
    css: (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            background: #fff;\n            border-radius: 5px;\n            border: none;\n            box-shadow: 0px 0px 4px 1px #ddd;\n          "])))
  }), (0, _react2.jsx)("div", getArrowProps({
    className: 'tooltip-arrow'
  })), (0, _react2.jsx)(_shadeTooltip["default"], {
    shade: shade,
    copied: copied
  })));
};
var _default = exports["default"] = Shade;