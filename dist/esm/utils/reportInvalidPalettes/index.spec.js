import reportInvalidPalettes from '.';
import { invalidPaletteAsArray } from '../testsUtils';
import { getInvalidPaletteMessage, warn } from '../transformPalette/messages';
jest.mock('../transformPalette/messages');
var getInvalidPaletteMessageMock = getInvalidPaletteMessage;
var warnMock = warn;
describe('reportInvalidPalettes', function () {
  getInvalidPaletteMessageMock.mockReturnValue('expected string');
  it('reports correctly', function () {
    reportInvalidPalettes(invalidPaletteAsArray);
    var expectedInvalidColors = ['light -> #fff', 'light -> #eee'];
    expect(getInvalidPaletteMessageMock).toBeCalledTimes(1);
    expect(getInvalidPaletteMessageMock).toBeCalledWith(expectedInvalidColors, 'foo');
    expect(warnMock).toBeCalledTimes(1);
    expect(warnMock).toBeCalledWith('expected string');
  });
});