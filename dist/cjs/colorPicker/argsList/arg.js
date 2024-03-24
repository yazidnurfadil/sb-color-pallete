"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _checkBox = _interopRequireDefault(require("../checkBox/checkBox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Arg = function Arg(_ref) {
  var item = _ref.item,
    itemProps = _ref.itemProps;
  var isSelected = itemProps.selected.includes(item);
  return /*#__PURE__*/_react["default"].createElement(_checkBox["default"], {
    label: item,
    checked: isSelected
  });
};
var _default = exports["default"] = Arg;