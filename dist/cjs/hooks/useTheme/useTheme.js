"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _managerApi = require("@storybook/manager-api");
var _theming = require("@storybook/theming");
var _constants = require("./constants");
var useTheme = function useTheme() {
  var sbTheme = (0, _theming.useTheme)();
  var colorPicker = (0, _managerApi.useParameter)('colorPicker') || {};
  var themeType = sbTheme.base;
  if (colorPicker.theme && colorPicker.theme !== 'auto') {
    themeType = colorPicker.theme;
  }
  return {
    theme: _constants.themes[themeType],
    commonTheme: _constants.commonTheme,
    themeType: themeType
  };
};
var _default = exports["default"] = useTheme;