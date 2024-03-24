"use strict";

var _ = _interopRequireDefault(require("."));
var _testsUtils = require("../testsUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('getColorControls', function () {
  it.each([['no extra controls', _testsUtils.argTypes, undefined, ['backgroundColor']], ['extra controls added', _testsUtils.argTypes, ['label'], ['backgroundColor', 'label']], ['no argTypes', {}, undefined, undefined], ['unsupported extra controls', _testsUtils.argTypes, ['primary'], ['backgroundColor']]])('returns controls correctly when %s', function (desc, argTypes, extraControls, expected) {
    var output = (0, _["default"])(argTypes, extraControls);
    expect(output).toEqual(expected);
  });
});