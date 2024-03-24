"use strict";

var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('joinStringList', function () {
  it.each([[undefined, 'foo, bar and baz'], [0, '3'], [1, 'foo and 2 others'], [2, 'foo, bar and 1 other'], [3, 'foo, bar and baz'], [4, 'foo, bar and baz']])('renders correctly when limit is %p', function (limit, expected) {
    var output = (0, _["default"])(['foo', 'bar', 'baz'], limit, 'other');
    expect(output).toBe(expected);
  });
});