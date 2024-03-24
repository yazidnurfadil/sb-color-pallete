"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _dropdown = _interopRequireDefault(require("../dropdown/dropdown"));
var _palette = _interopRequireDefault(require("./palette"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var PalettesList = function PalettesList(_ref) {
  var palettes = _ref.palettes,
    current = _ref.current,
    onChange = _ref.onChange;
  var handleChange = (0, _react.useCallback)(function (item, index) {
    onChange(index);
  }, [onChange]);
  var label = palettes.length > 1 ? palettes[current].name : palettes[0].name;
  var itemProps = {
    current: current
  };
  return /*#__PURE__*/_react["default"].createElement(_dropdown["default"], {
    label: label || "Palette No".concat(current + 1),
    items: palettes,
    itemProps: itemProps,
    itemComponent: _palette["default"],
    closeOnItemClick: true,
    renderList: ">1",
    onItemClick: handleChange
  });
};
var _default = exports["default"] = PalettesList;