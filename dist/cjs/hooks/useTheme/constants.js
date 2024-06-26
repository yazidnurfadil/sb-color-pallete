"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themes = exports.lightTheme = exports.darkTheme = exports.commonTheme = void 0;
var lightTheme = exports.lightTheme = {
  text: {
    primary: '#333333',
    hover: '#ffffff',
    selected: '#ffffff'
  },
  background: {
    main: '#fdfdfd',
    primary: '#ffffff',
    secondary: '#ffffff',
    tertiary: '#eeeeee',
    hover: '#1ea7fd12',
    selected: '#1ea7fd'
  },
  border: {
    primary: '#99999966',
    secondary: '#777777',
    tertiary: '#eeeeee'
  },
  shadow: {
    primary: '#eeeeee'
  }
};
var darkTheme = exports.darkTheme = {
  text: {
    primary: '#ffffff',
    hover: '#333333',
    selected: '#ffffff'
  },
  background: {
    main: '#020202',
    primary: '#2f2f2f',
    secondary: '#333333',
    tertiary: '#5d5d5d',
    hover: '#1ea7fd12',
    selected: '#1ea7fd'
  },
  border: {
    primary: '#ffffff',
    secondary: '#777777',
    tertiary: '#5d5d5d'
  },
  shadow: {
    primary: '#6c6c6c'
  }
};
var themes = exports.themes = {
  light: lightTheme,
  dark: darkTheme
};
var commonTheme = exports.commonTheme = {
  border: {
    primary: '#99999966'
  },
  scrollBar: {
    track: 'transparent',
    thumb: '#cccccc',
    thumbHover: '#666666'
  }
};