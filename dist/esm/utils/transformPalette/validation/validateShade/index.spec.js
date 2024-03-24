import validateShade from '.';
import chroma from 'chroma-js';
jest.mock('chroma-js', function () {
  return {
    valid: jest.fn()
  };
});
var validMock = chroma.valid;
describe('validateShade', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it.each([['true', 'valid', true, true], ['false', 'invalid', false, false]])('returns %p if color is %s', function (desc1, desc2, isValid, expected) {
    validMock.mockReturnValue(isValid);
    var output = validateShade('baz');
    expect(output).toBe(expected);
  });
});