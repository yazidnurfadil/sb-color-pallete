"use strict";

var _2 = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
    var output = (0, _2["default"])(statePalettes, primaryPaletteIndex);
    expect(output).toEqual(expected);
  });
});