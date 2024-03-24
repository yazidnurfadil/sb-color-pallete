import { paletteAsArray, paletteAsObject, statePalette } from '../testsUtils';
import transformPalette from '.';
import validateArrayPalette from './validation/validateArrayPalette';
import transformObjectPalette from './transformation/transformObjectPalette';
jest.mock('./validation/validateArrayPalette');
jest.mock('./transformation/transformObjectPalette');
describe('transformPalette', function () {
  var validateArrayPaletteMock = validateArrayPalette;
  var transformObjectPaletteMock = transformObjectPalette;
  beforeEach(function () {
    jest.resetAllMocks();
  });
  it('return transformed palette when palette as array', function () {
    validateArrayPaletteMock.mockReturnValue(statePalette);
    var output = transformPalette(paletteAsArray);
    expect(transformObjectPalette).not.toHaveBeenCalled();
    expect(validateArrayPalette).toHaveBeenCalledTimes(1);
    expect(validateArrayPalette).toHaveBeenCalledWith(paletteAsArray);
    expect(output).toEqual(statePalette);
  });
  it('return transformed palette when palette as object', function () {
    transformObjectPaletteMock.mockReturnValue(statePalette);
    var output = transformPalette(paletteAsObject);
    expect(validateArrayPalette).not.toHaveBeenCalled();
    expect(transformObjectPalette).toHaveBeenCalledTimes(1);
    expect(transformObjectPalette).toHaveBeenCalledWith(paletteAsObject);
    expect(output).toEqual(statePalette);
  });
});