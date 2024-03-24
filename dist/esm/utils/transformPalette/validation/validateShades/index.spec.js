function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import validateShade from '../validateShade';
import validateShades from '.';
jest.mock('../validateShade');
var validateShadeMock = validateShade;
describe('validateShades', function () {
  beforeEach(function () {
    jest.clearAllMocks();
    global.CSS = {
      supports: jest.fn(),
      escape: jest.fn()
    };
  });
  it.each([['all values are valid', [true, true], [2, 0]], ['has valid and invalid values', [true, false], [1, 1]], ['no valid values', [false, false], [0, 2]]])('Returns correct values when %s', function (desc, isValid, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      expectedValidColors = _ref2[0],
      expectedInvalidColors = _ref2[1];
    validateShadeMock.mockReturnValueOnce(isValid[0]).mockReturnValueOnce(isValid[1]);
    var output = validateShades([{
      label: 'foo',
      value: '#000'
    }, {
      label: 'bar',
      value: '#FFF'
    }]);
    expect(output.validShades).toHaveLength(expectedValidColors);
    expect(output.invalidShades).toHaveLength(expectedInvalidColors);
  });
});