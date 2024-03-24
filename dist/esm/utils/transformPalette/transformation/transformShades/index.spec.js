import { lightArray, transformedLightArray } from 'src/utils/testsUtils';
import transformShades from '.';
import getTextColor from '../getTextColor';
jest.mock('../getTextColor');
describe('transformShades', function () {
  var getTextColorMock = jest.mocked(getTextColor);
  it('transforms shades correctly', function () {
    getTextColorMock.mockReturnValue('#000000');
    var output = transformShades(lightArray.values);
    expect(output).toEqual(transformedLightArray.values);
  });
});