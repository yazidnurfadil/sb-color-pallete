import React from 'react';
import Dropdown from './dropdown';
import { fireEvent, render, screen } from '@testing-library/react';
jest.mock('../../hooks/useTheme/useTheme', function () {
  return function () {
    return {
      theme: {
        text: {
          primary: '#333333',
          hover: '#ffffff',
          selected: '#ffffff'
        },
        background: {
          primary: '#ffffff',
          secondary: '#ffffff',
          tertiary: '#eeeeee',
          hover: '#1ea7fd12',
          selected: '#1ea7fd'
        },
        border: {
          primary: '#99999966',
          secondary: '#777777',
          tertiary: '#eeeeee'
        },
        shadow: {
          primary: '#eeeeee'
        }
      },
      commonTheme: {
        border: {
          primary: '#99999966'
        },
        scrollBar: {
          track: 'transparent',
          thumb: '#cccccc',
          thumbHover: '#666666'
        }
      },
      themeType: 'light'
    };
  };
});
var getByTestId = screen.getByTestId,
  queryByTestId = screen.queryByTestId;
var Item = function Item(props) {
  return /*#__PURE__*/React.createElement("div", null, props.item);
};
describe('Dropdown', function () {
  var label = 'Label';
  var e = {
    preventDefault: jest.fn()
  };
  var onLabelClick;
  var onItemClick;
  beforeEach(function () {
    onLabelClick = jest.fn();
    onItemClick = jest.fn();
  });
  it.each([['has only one item and renderList === undefined', undefined, ['first'], true, true], ["has only one item and renderList === '>1'", '>1', ['first'], false, false], ["has only one item and renderList === 'always'", 'always', ['first'], true, true], ['has more than one item and renderList === undefined', undefined, ['first', 'second'], true, true], ["has more than one item and renderList === '>1'", '>1', ['first', 'second'], true, true], ["has more than one item and renderList === 'always'", 'always', ['first', 'second'], true, true]])('renders correctly when %s', function (desc, renderList, items, expectedList, expectedChevron) {
    var dropdownComponent = /*#__PURE__*/React.createElement(Dropdown, {
      label: label,
      items: items,
      itemProps: {
        current: 1
      },
      renderList: renderList,
      itemComponent: Item,
      onItemClick: onItemClick
    });
    render(dropdownComponent);
    var dropdownLabel = getByTestId('dropdownLabel');
    var dropdownChevron = queryByTestId('dropdownChevron');
    var dropdownList = queryByTestId('dropdownList');
    expect(dropdownLabel.textContent).toBe(label);
    expect(!!dropdownChevron).toBe(expectedChevron);
    expect(!!dropdownList).toBe(expectedList);
  });
  it.each([['', 'defined', true, 1], ['do NOT', 'undefined', false, 0]])('%s calls onLabelClick when onLabelClick is %s', function (desc1, desc2, isCallbackDefined, expectedCallsQty) {
    var dropdownComponent = /*#__PURE__*/React.createElement(Dropdown, {
      label: label,
      items: ['item'],
      itemProps: {
        current: 1
      },
      itemComponent: Item,
      onLabelClick: isCallbackDefined ? onLabelClick : undefined,
      onItemClick: onItemClick
    });
    render(dropdownComponent);
    var dropdownButton = getByTestId('dropdownButton');
    fireEvent.click(dropdownButton, e);
    getByTestId('dropdownChevron');
    getByTestId('dropdownList');
    expect(onLabelClick).toHaveBeenCalledTimes(expectedCallsQty);
    if (isCallbackDefined) {
      expect(onLabelClick).toHaveBeenCalledWith(true);
    } else {
      expect(onLabelClick).not.toHaveBeenCalled();
    }
  });
});