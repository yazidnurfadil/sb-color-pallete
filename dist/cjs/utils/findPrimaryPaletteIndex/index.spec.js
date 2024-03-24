"use strict";

var _2 = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('findPrimaryPaletteIndex', function () {
  var palettes = [{
    name: 'palette name',
    palette: []
  }, {
    name: 'palette',
    palette: []
  }];
  it.each([['name is on the list', 'palette name', 0], ['name is on the list', 'palette', 1], ['name is NOT on the list', 'foo', undefined]])('return correct index when %s', function (_, primaryPalette, expected) {
    var input = {
      primaryPalette: primaryPalette,
      palettes: palettes
    };
    var output = (0, _2["default"])(input);
    expect(output).toEqual(expected);
  });
});