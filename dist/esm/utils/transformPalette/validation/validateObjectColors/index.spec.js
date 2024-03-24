import { lightArray, lightObject, whiteArray, whiteObject } from '../../../testsUtils';
import validateShade from '../validateShade';
import validateObjectColors from '.';
jest.mock('../validateShade');
describe('validateObjectColors', function () {
  var validateShadeMock = validateShade;
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('calls validateShade correctly when value as string', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(whiteObject)[0];
    validateObjectColors(color[0], color[1]);
    expect(validateShade).toHaveBeenCalledTimes(1);
    expect(validateShade).toHaveBeenCalledWith('#fff');
  });
  it('calls validateShade correctly when value as object', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(lightObject)[0];
    validateObjectColors(color[0], color[1]);
    expect(validateShade).toHaveBeenCalledTimes(2);
    expect(validateShade).toHaveBeenNthCalledWith(1, '#fff');
    expect(validateShade).toHaveBeenNthCalledWith(2, '#eee');
  });
  it('returns transformed colors correctly when value as string', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(whiteObject)[0];
    var output = validateObjectColors(color[0], color[1]);
    var expected = {
      palette: whiteArray
    };
    expect(output).toEqual(expected);
  });
  it('returns incorrect color when incorrect value as string', function () {
    validateShadeMock.mockReturnValue(false);
    var color = Object.entries(whiteObject)[0];
    var output = validateObjectColors(color[0], color[1]);
    var expected = {
      invalidColors: whiteArray
    };
    expect(output).toEqual(expected);
  });
  it('returns transformed colors correctly when value as object', function () {
    validateShadeMock.mockReturnValue(true);
    var color = Object.entries(lightObject)[0];
    var output = validateObjectColors(color[0], color[1]);
    var expected = {
      palette: lightArray
    };
    expect(validateShade).toHaveBeenCalledTimes(2);
    expect(output).toEqual(expected);
  });
  it('returns transformed colors correctly when one incorrect object value', function () {
    validateShadeMock.mockReturnValueOnce(false).mockReturnValue(true);
    var color = Object.entries(lightObject)[0];
    var expected = {
      palette: {
        label: 'light',
        values: [{
          label: '200',
          value: '#eee'
        }]
      },
      invalidColors: {
        label: 'light',
        values: [{
          label: '100',
          value: '#fff'
        }]
      }
    };
    var output = validateObjectColors(color[0], color[1]);
    expect(validateShade).toHaveBeenCalledTimes(2);
    expect(output).toEqual(expected);
  });
  it('returns only incorrect colors when no correct object values', function () {
    validateShadeMock.mockReturnValue(false);
    var color = Object.entries(lightObject)[0];
    var output = validateObjectColors(color[0], color[1]);
    var expected = {
      invalidColors: lightArray
    };
    expect(validateShade).toHaveBeenCalledTimes(2);
    expect(output).toEqual(expected);
  });
});