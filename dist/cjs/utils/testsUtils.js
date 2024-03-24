"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whiteObject = exports.whiteArray = exports.transformedWhiteArray = exports.transformedLightArray = exports.transformedDarkArray = exports.statePalette = exports.paletteAsObject = exports.paletteAsArray = exports.lightObject = exports.lightArray = exports.invalidPaletteAsArray = exports.darkObject = exports.darkArray = exports.argTypes = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var lightArray = exports.lightArray = {
  label: 'light',
  values: [{
    label: '100',
    value: '#fff'
  }, {
    label: '200',
    value: '#eee'
  }]
};
var transformedLightArray = exports.transformedLightArray = {
  label: 'light',
  values: [{
    label: '100',
    value: '#fff',
    textColor: '#000000'
  }, {
    label: '200',
    value: '#eee',
    textColor: '#000000'
  }]
};
var darkArray = exports.darkArray = {
  label: 'dark',
  values: [{
    label: '100',
    value: '#000'
  }, {
    label: '200',
    value: '#111'
  }]
};
var transformedDarkArray = exports.transformedDarkArray = {
  label: 'dark',
  values: [{
    label: '100',
    value: '#000',
    textColor: '#FFFFFF'
  }, {
    label: '200',
    value: '#111',
    textColor: '#FFFFFF'
  }]
};
var whiteArray = exports.whiteArray = {
  label: 'white',
  values: [{
    label: 'white',
    value: '#fff'
  }]
};
var transformedWhiteArray = exports.transformedWhiteArray = {
  label: 'white',
  values: [{
    label: 'white',
    value: '#fff',
    textColor: '#000000'
  }]
};
var paletteAsArray = exports.paletteAsArray = {
  name: 'foo',
  palette: [lightArray, darkArray, whiteArray]
};
var invalidPaletteAsArray = exports.invalidPaletteAsArray = [{
  name: 'foo',
  invalidColors: [lightArray]
}];
var statePalette = exports.statePalette = {
  name: 'foo',
  palette: [transformedLightArray, transformedDarkArray, transformedWhiteArray]
};
var lightObject = exports.lightObject = {
  light: {
    100: '#fff',
    200: '#eee'
  }
};
var darkObject = exports.darkObject = {
  dark: {
    100: '#000',
    200: '#111'
  }
};
var whiteObject = exports.whiteObject = {
  white: '#fff'
};
var paletteAsObject = exports.paletteAsObject = {
  name: 'bar',
  palette: _objectSpread(_objectSpread(_objectSpread({}, lightObject), darkObject), whiteObject)
};
var argTypes = exports.argTypes = {
  backgroundColor: {
    name: 'backgroundColor',
    control: {
      type: 'color'
    },
    type: {
      name: 'string'
    }
  },
  label: {
    name: 'label',
    control: {
      type: 'text'
    },
    type: {
      name: 'string'
    }
  },
  disabled: {
    name: 'disabled',
    control: {
      type: 'boolean'
    },
    type: {
      name: 'boolean'
    }
  }
};