/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { changeView, changeSlider } from '../actions/actions';

const Action = require('../components/Action').default;

configure({ adapter: new (Adapter as any)() });

describe('unit testing for Action.tsx', () => {
  let wrapper;
  const props = {
    key: 'actions2',
    selected: true,
    last: false,
    index: 2,
    sliderIndex: 2,
    dispatch: jest.fn(),
    displayName: '3.0',
    componentName: 'App',
    logChangedState: jest.fn(),
    componentData: {
      actualDuration: 3.5,
    },
    state: { test: 'test' },
    viewIndex: 2,
    handleOnkeyDown: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<Action {...props} />);
    props.dispatch.mockClear();
  });

  describe('Component', () => {
    test.skip("should have a className 'action-component selected' if props.selected is true", () => {
      wrapper.setProps({ selected: true });
      expect(wrapper.hasClass('action-component selected')).toEqual(true);
    });

    test("shouldn't have a className 'action-component selected' if props.selected is false", () => {
      wrapper.setProps({ selected: false });
      expect(wrapper.hasClass('action-component selected')).toEqual(false);
    });

    test('should invoke dispatch method when clicked', () => {
      wrapper.find('.action-component').simulate('click');
      expect(props.dispatch).toHaveBeenCalled();
    });

    test('dispatch should send a changeView action', () => {
      wrapper.find('.action-component').simulate('click');
      expect(props.dispatch.mock.calls[0][0]).toEqual(changeView(props.index));
    });
  });

  describe('Jump Button', () => {
    test("should render a div with a className 'jump-button' inside action-component", () => {
      expect(wrapper.find('.action-component').children().find('.jump-button')).toHaveLength(1);
    });

    test('should invoke dispatch method when clicked', () => {
      wrapper.find('.jump-button').simulate('click', { stopPropagation() {} });
      expect(props.dispatch).toHaveBeenCalled();
    });

    test('dispatch should send a changeSlider action', () => {
      wrapper.find('.jump-button').simulate('click', { stopPropagation() {} });
      expect(props.dispatch.mock.calls[0][0]).toEqual(changeSlider(props.index));
    });
  });
});
