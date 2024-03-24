import getColorControls from '.';
import { argTypes as ARG_TYPES } from '../testsUtils';
describe('getColorControls', function () {
  it.each([['no extra controls', ARG_TYPES, undefined, ['backgroundColor']], ['extra controls added', ARG_TYPES, ['label'], ['backgroundColor', 'label']], ['no argTypes', {}, undefined, undefined], ['unsupported extra controls', ARG_TYPES, ['primary'], ['backgroundColor']]])('returns controls correctly when %s', function (desc, argTypes, extraControls, expected) {
    var output = getColorControls(argTypes, extraControls);
    expect(output).toEqual(expected);
  });
});