import useTheme from './useTheme';
import { lightTheme, commonTheme, darkTheme } from './constants';
import { useParameter } from '@storybook/manager-api';
import { useTheme as useSBTheme } from '@storybook/theming';
import { renderHook } from '@testing-library/react';
jest.mock('@storybook/theming');
jest.mock('@storybook/manager-api');
var mockUseSBTheme = jest.mocked(useSBTheme);
var mockUseParameter = jest.mocked(useParameter);
describe('useTheme', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it.each([['light', 'light', lightTheme, 'light'], ['dark', 'dark', darkTheme, 'dark'], ['light', 'light', lightTheme, 'light'], ['dark', 'light', lightTheme, 'light'], ['dark', 'dark', darkTheme, 'dark'], ['light', 'dark', darkTheme, 'dark'], ['dark', 'auto', darkTheme, 'dark'], ['light', 'auto', lightTheme, 'light'], ['light', undefined, lightTheme, 'light'], ['dark', undefined, darkTheme, 'dark']])('Returns correct object when storybook SBTheme === %s, addonTheme === %s', function (SBTheme, addonTheme, theme, expectedThemeType) {
    mockUseSBTheme.mockReturnValue({
      base: SBTheme
    });
    mockUseParameter.mockReturnValue({
      theme: addonTheme
    });
    var _renderHook = renderHook(function () {
        return useTheme();
      }),
      result = _renderHook.result;
    expect(useSBTheme).toHaveBeenCalledTimes(1);
    expect(useParameter).toHaveBeenCalledTimes(1);
    expect(useParameter).toHaveBeenCalledWith('colorPicker');
    expect(result.current).toStrictEqual({
      theme: theme,
      commonTheme: commonTheme,
      themeType: expectedThemeType
    });
  });
});