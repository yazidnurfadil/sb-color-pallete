import { darkArray, lightArray, paletteAsArray, whiteArray } from 'src/utils/testsUtils';
import validateShade from '../validateShade';
import validateArrayPalette from '.';
jest.mock('../validateShade');
describe('validateArrayPalette', function () {
  var validateShadeMock = validateShade;
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('validates all shades', function () {
    validateShadeMock.mockReturnValue(true);
    validateArrayPalette(paletteAsArray);
    expect(validateShade).toHaveBeenCalledTimes(5);
    expect(validateShade).toHaveBeenNthCalledWith(1, '#fff');
    expect(validateShade).toHaveBeenNthCalledWith(2, '#eee');
    expect(validateShade).toHaveBeenNthCalledWith(3, '#000');
    expect(validateShade).toHaveBeenNthCalledWith(4, '#111');
    expect(validateShade).toHaveBeenNthCalledWith(5, '#fff');
  });
  it('gets invalid messages and calls warn', function () {
    validateShadeMock.mockReturnValue(false);
    validateArrayPalette(paletteAsArray);
  });
  it('returns transformed palette correctly', function () {
    validateShadeMock.mockReturnValue(true);
    var expected = {
      name: 'foo',
      palette: [lightArray, darkArray, whiteArray],
      invalidColors: []
    };
    var output = validateArrayPalette(paletteAsArray);
    expect(output).toEqual(expected);
  });
  it('returns transformed palette correctly when invalid shade', function () {
    validateShadeMock.mockReturnValueOnce(false).mockReturnValue(true);
    var output = validateArrayPalette(paletteAsArray);
    var expected = {
      name: 'foo',
      palette: [{
        label: 'light',
        values: [{
          label: '200',
          value: '#eee'
        }]
      }, darkArray, whiteArray],
      invalidColors: [{
        label: paletteAsArray.palette[0].label,
        values: [paletteAsArray.palette[0].values[0]]
      }]
    };
    expect(output).toEqual(expected);
  });
  it('returns transformed palette correctly when invalid all color shades', function () {
    validateShadeMock.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValue(true);
    var output = validateArrayPalette(paletteAsArray);
    var expected = {
      name: 'foo',
      palette: [darkArray, whiteArray],
      invalidColors: [lightArray]
    };
    expect(output).toEqual(expected);
  });
  it('returns no palettes whe no valid shades', function () {
    validateShadeMock.mockReturnValue(false);
    var output = validateArrayPalette(paletteAsArray);
    var expected = {
      name: 'foo',
      palette: [],
      invalidColors: [lightArray, darkArray, whiteArray]
    };
    expect(output).toEqual(expected);
  });
});