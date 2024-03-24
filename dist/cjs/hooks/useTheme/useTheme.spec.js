"use strict";

var _useTheme = _interopRequireDefault(require("./useTheme"));
var _constants = require("./constants");
var _managerApi = require("@storybook/manager-api");
var _theming = require("@storybook/theming");
var _react = require("@testing-library/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('@storybook/theming');
jest.mock('@storybook/manager-api');
var mockUseSBTheme = jest.mocked(_theming.useTheme);
var mockUseParameter = jest.mocked(_managerApi.useParameter);
describe('useTheme', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it.each([['light', 'light', _constants.lightTheme, 'light'], ['dark', 'dark', _constants.darkTheme, 'dark'], ['light', 'light', _constants.lightTheme, 'light'], ['dark', 'light', _constants.lightTheme, 'light'], ['dark', 'dark', _constants.darkTheme, 'dark'], ['light', 'dark', _constants.darkTheme, 'dark'], ['dark', 'auto', _constants.darkTheme, 'dark'], ['light', 'auto', _constants.lightTheme, 'light'], ['light', undefined, _constants.lightTheme, 'light'], ['dark', undefined, _constants.darkTheme, 'dark']])('Returns correct object when storybook SBTheme === %s, addonTheme === %s', function (SBTheme, addonTheme, theme, expectedThemeType) {
    mockUseSBTheme.mockReturnValue({
      base: SBTheme
    });
    mockUseParameter.mockReturnValue({
      theme: addonTheme
    });
    var _renderHook = (0, _react.renderHook)(function () {
        return (0, _useTheme["default"])();
      }),
      result = _renderHook.result;
    expect(_theming.useTheme).toHaveBeenCalledTimes(1);
    expect(_managerApi.useParameter).toHaveBeenCalledTimes(1);
    expect(_managerApi.useParameter).toHaveBeenCalledWith('colorPicker');
    expect(result.current).toStrictEqual({
      theme: theme,
      commonTheme: _constants.commonTheme,
      themeType: expectedThemeType
    });
  });
});