import { darkArray, lightArray, paletteAsArray, paletteAsObject, transformedDarkArray, transformedLightArray, transformedWhiteArray, whiteArray } from 'src/utils/testsUtils';
import transformObjectPalette from '.';
import validateObjectColors from '../../validation/validateObjectColors';
jest.mock('../../validation/validateObjectColors');
describe('transformObjectPalette', function () {
  var validateObjectColorsMock = validateObjectColors;
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('returns transformed palette correctly', function () {
    validateObjectColorsMock.mockReturnValueOnce({
      palette: lightArray
    }).mockReturnValueOnce({
      palette: darkArray
    }).mockReturnValueOnce({
      palette: whiteArray
    });
    var output = transformObjectPalette(paletteAsObject);
    var expected = {
      name: 'bar',
      palette: [transformedLightArray, transformedDarkArray, transformedWhiteArray],
      invalidColors: []
    };
    expect(validateObjectColors).toHaveBeenCalledTimes(3);
    expect(output).toEqual(expected);
  });
  it('returns transformed palette correctly when values of one color are invalid', function () {
    validateObjectColorsMock.mockReturnValueOnce({
      invalidColors: lightArray
    }).mockReturnValueOnce({
      palette: darkArray
    }).mockReturnValueOnce({
      palette: whiteArray
    });
    var output = transformObjectPalette(paletteAsObject);
    var expected = {
      name: 'bar',
      palette: [transformedDarkArray, transformedWhiteArray],
      invalidColors: [lightArray]
    };
    expect(validateObjectColors).toHaveBeenCalledTimes(3);
    expect(output).toEqual(expected);
  });
  it('returns correctly when values of all colors are invalid', function () {
    validateObjectColorsMock.mockReturnValueOnce({
      invalidColors: lightArray
    }).mockReturnValueOnce({
      invalidColors: darkArray
    }).mockReturnValueOnce({
      invalidColors: whiteArray
    });
    var output = transformObjectPalette(paletteAsObject);
    expect(validateObjectColors).toHaveBeenCalledTimes(3);
    expect(output).toEqual({
      name: 'bar',
      palette: [],
      invalidColors: paletteAsArray.palette
    });
  });
});