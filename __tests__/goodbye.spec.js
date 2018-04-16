import React from 'react';
import { shallow, mount } from 'enzyme';
import GoodBye, { Provider } from '../src';

describe('GoodBye Provider', () => {
  test('should receive handleGetUserConfirm render prop', () => {
    shallow(
      <Provider>
        {(props) => {
          expect(props.handleGetUserConfirm).toBeTruthy();
        }}
      </Provider>
    )
  });

  test('should have initial isShow to be false', () => {
    const wrapper = shallow(
      <Provider>
        {() => {}}
      </Provider>
    );
    expect(wrapper.state('isShow')).toBe(false);
  });

  test('should handleOk correctly', () => {
    let handleFunc;
    const mockPass = jest.fn();
    const wrapper = shallow(
      <Provider>
        {({ handleGetUserConfirm }) => {
          handleFunc = handleGetUserConfirm;
        }}
      </Provider>
    );

    handleFunc('message', mockPass);
    wrapper.update();
    expect(wrapper.state('isShow')).toBe(true);

    wrapper.instance().handleOk();
    wrapper.update();
    expect(wrapper.state('isShow')).toBe(false);
    expect(mockPass).toBeCalledWith(true);
  });

  test('should handleCancel correctly', () => {
    let handleFunc;
    const mockPass = jest.fn();
    const wrapper = shallow(
      <Provider>
        {({ handleGetUserConfirm }) => {
          handleFunc = handleGetUserConfirm;
        }}
      </Provider>
    );

    handleFunc('message', mockPass);
    wrapper.update();
    expect(wrapper.state('isShow')).toBe(true);

    wrapper.instance().handleCancel();
    wrapper.update();
    expect(wrapper.state('isShow')).toBe(false);
    expect(mockPass).toBeCalledWith(false);
  });
});
