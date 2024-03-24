function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import useOutsideClick from './useOutsideClick';
import { fireEvent, act, renderHook } from '@testing-library/react';
var countAddEventListenerCalls = function countAddEventListenerCalls() {
  var spiedAddEventListener = document.addEventListener;
  spiedAddEventListener.mock.calls = spiedAddEventListener.mock.calls.filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      fn = _ref2[0];
    return fn !== 'selectionchange';
  });
  return spiedAddEventListener;
};
describe('useOutsideClick', function () {
  var element;
  var callback;
  beforeEach(function () {
    element = document.createElement('div');
    callback = jest.fn();
  });
  it('adds event listener to the document', function () {
    jest.spyOn(document, 'addEventListener');
    var _renderHook = renderHook(function () {
        return useOutsideClick(callback);
      }),
      result = _renderHook.result;
    act(function () {
      return result.current(element);
    });
    expect(countAddEventListenerCalls()).toBeCalledTimes(1);
    expect(countAddEventListenerCalls()).toHaveBeenCalledWith('click', expect.anything());
  });
  it('removes event listener on cleanup', function () {
    var mockRemoveEventListener = jest.spyOn(document, 'removeEventListener');
    var _renderHook2 = renderHook(function () {
        return useOutsideClick(callback);
      }),
      result = _renderHook2.result,
      unmount = _renderHook2.unmount;
    act(function () {
      return result.current(element);
    });
    unmount();
    expect(mockRemoveEventListener).toHaveBeenCalledTimes(1);
    expect(mockRemoveEventListener).toHaveBeenCalledWith('click', expect.anything());
  });
  it('calls callback on click outside', function () {
    var _renderHook3 = renderHook(function () {
        return useOutsideClick(callback);
      }),
      result = _renderHook3.result;
    act(function () {
      return result.current(element);
    });
    fireEvent.click(document);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(expect.anything());
  });
  it('do NOT calls callback on click inside', function () {
    var _renderHook4 = renderHook(function () {
        return useOutsideClick(callback);
      }),
      result = _renderHook4.result;
    act(function () {
      return result.current(element);
    });
    fireEvent.click(element);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});