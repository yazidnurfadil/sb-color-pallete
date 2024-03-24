function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/** @jsx jsx */
import { useCallback, useEffect } from 'react';
import { useParameter, useStorybookState, useAddonState, useStorybookApi } from '@storybook/manager-api';
import { css, jsx } from '@emotion/react';
import { findPrimaryPaletteIndex, getColorControls, getColorPalettes, getPrimaryPaletteName, reportInvalidPalettes } from '../utils';
import { ADDON_ID } from '../constants';
import ArgsList from './argsList/argsList';
import PalettesList from './palettesList/palettesList';
import CheckBox from './checkBox/checkBox';
import Palette from './palette';
import { useTheme } from '../hooks';
var initialAddonState = {
  storyStates: {}
};
var ColorPicker = function ColorPicker() {
  var _addonState$storyStat, _storyPalettes$palett2, _storyState$controls;
  var _useTheme = useTheme(),
    commonTheme = _useTheme.commonTheme,
    theme = _useTheme.theme;
  var colorPicker = useParameter('colorPicker') || {};
  var primaryPalette = colorPicker.primaryPalette,
    palettes = colorPicker.palettes,
    additionalControls = colorPicker.applyColorTo,
    disableDefaultPalettes = colorPicker.disableDefaultPalettes;
  var storybookApi = useStorybookApi();
  var state = useStorybookState();
  var _useAddonState = useAddonState(ADDON_ID, initialAddonState),
    _useAddonState2 = _slicedToArray(_useAddonState, 2),
    addonState = _useAddonState2[0],
    setAddonState = _useAddonState2[1];
  var storyId = state.storyId;
  var storyState = addonState === null || addonState === void 0 || (_addonState$storyStat = addonState.storyStates) === null || _addonState$storyStat === void 0 ? void 0 : _addonState$storyStat[storyId];
  var storyPalettes = storyState === null || storyState === void 0 ? void 0 : storyState.storyPalettes;
  useEffect(function () {
    var _storyPalettes$palett;
    if (storyPalettes !== null && storyPalettes !== void 0 && (_storyPalettes$palett = storyPalettes.palettes) !== null && _storyPalettes$palett !== void 0 && _storyPalettes$palett.length) {
      return;
    }
    var validatedStoryPalettes = getColorPalettes(disableDefaultPalettes, palettes);
    var initialStoryPalettes = {
      palettes: validatedStoryPalettes.palettes,
      primaryPalette: primaryPalette
    };
    if (validatedStoryPalettes.invalidPalettes.length) {
      reportInvalidPalettes(validatedStoryPalettes.invalidPalettes);
    }
    var primaryPaletteIndex = findPrimaryPaletteIndex(initialStoryPalettes);
    var primaryPaletteName = getPrimaryPaletteName(initialStoryPalettes, primaryPaletteIndex);
    var storyData = storybookApi.getCurrentStoryData();
    var controls = getColorControls((storyData === null || storyData === void 0 ? void 0 : storyData.argTypes) || {}, additionalControls);
    var newState = _objectSpread(_objectSpread({}, addonState), {}, {
      storyStates: _objectSpread(_objectSpread({}, addonState.storyStates), {}, _defineProperty({}, storyId, {
        currentPalette: primaryPaletteIndex || 0,
        controls: controls,
        selectedControls: [],
        copyOnClick: true,
        storyPalettes: _objectSpread(_objectSpread({}, initialStoryPalettes), {}, {
          primaryPalette: primaryPaletteName
        })
      }))
    });
    setAddonState(newState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorPicker]);
  var handleArgsChange = useCallback(function (newArgs) {
    var newState = _objectSpread({}, addonState);
    var selectedControls = newArgs;
    newState.storyStates[storyId].selectedControls = selectedControls;
    setAddonState(newState);
  }, [addonState, setAddonState, storyId]);
  var handlePaletteChange = useCallback(function (newCurrent) {
    var newState = _objectSpread({}, addonState);
    newState.storyStates[storyId] = _objectSpread(_objectSpread({}, newState.storyStates[storyId]), {}, {
      currentPalette: newCurrent
    });
    setAddonState(newState);
  }, [addonState, setAddonState, storyId]);
  var handleCopyBoxClick = useCallback(function () {
    var newState = _objectSpread({}, addonState);
    var copy = !newState.storyStates[storyId].copyOnClick;
    newState.storyStates[storyId].copyOnClick = copy;
    setAddonState(newState);
  }, [addonState, setAddonState, storyId]);
  if (!(storyPalettes !== null && storyPalettes !== void 0 && (_storyPalettes$palett2 = storyPalettes.palettes) !== null && _storyPalettes$palett2 !== void 0 && _storyPalettes$palett2.length) || (storyState === null || storyState === void 0 ? void 0 : storyState.currentPalette) === undefined) {
    return null;
  }
  var currentPalette = storyPalettes === null || storyPalettes === void 0 ? void 0 : storyPalettes.palettes[storyState.currentPalette].palette;
  return jsx("div", {
    id: "color-picker",
    css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        * {\n          color: ", ";\n          border-color: ", ";\n        }\n\n        background: ", ";\n        border-radius: 8px;\n        max-height: 50vh;\n        max-width: 70vw;\n        padding: 0 1em 1em 1em;\n        overflow-x: hidden;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n          width: 0.5em;\n          height: 0.5em;\n        }\n        &::-webkit-scrollbar-track {\n          background: ", ";\n        }\n        &::-webkit-scrollbar-thumb {\n          background: ", ";\n          border-radius: 0.25em;\n          &:hover {\n            background-color: ", ";\n          }\n        }\n        @media (max-width: 800px) {\n          max-width: 95vw;\n          padding: 0 0.5em 0.5em 0.5em;\n        }\n      "])), "".concat(theme.text.primary), "".concat(theme.border.primary), "".concat(theme.background.main), "".concat(commonTheme.scrollBar.track), "".concat(commonTheme.scrollBar.thumb), "".concat(commonTheme.scrollBar.thumbHover))
  }, jsx("div", {
    css: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 2em;\n          margin: 1em 0;\n          flex-wrap: wrap-reverse;\n        "])))
  }, jsx(PalettesList, {
    palettes: storyPalettes.palettes,
    current: storyState.currentPalette,
    onChange: handlePaletteChange
  }), ((_storyState$controls = storyState.controls) === null || _storyState$controls === void 0 ? void 0 : _storyState$controls.length) > 0 && jsx(ArgsList, {
    args: storyState.controls,
    selected: storyState.selectedControls || [],
    onChange: handleArgsChange
  }), jsx(CheckBox, {
    label: "Copy on click",
    checked: storyState.copyOnClick,
    onClick: handleCopyBoxClick
  })), jsx(Palette, {
    palette: currentPalette
  }));
};
export default ColorPicker;