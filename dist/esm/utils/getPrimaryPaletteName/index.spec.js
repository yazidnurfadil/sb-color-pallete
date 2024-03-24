import getPrimaryPaletteName from '.';
describe('getPrimaryPaletteName', function () {
  var palettes = {
    primaryPalette: 'bar',
    palettes: [{
      name: 'foo',
      palette: []
    }, {
      name: 'bar',
      palette: []
    }]
  };
  it.each([['null when no statePalettes', undefined, undefined, null], ['first palette name when no primaryPaletteIndex', palettes, undefined, 'foo'], ['primary palette name', palettes, 2, 'bar']])('returns %s', function (_, statePalettes, primaryPaletteIndex, expected) {
    var output = getPrimaryPaletteName(statePalettes, primaryPaletteIndex);
    expect(output).toEqual(expected);
  });
});