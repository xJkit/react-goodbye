import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from '../src';

describe('Provider', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <Provider>
        {() => {}}
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });

  test('should receives handleGetUserConfirm props', () => {
    shallow(
      <Provider>
        {(props) => {
          expect(props.handleGetUserConfirm).toBeTruthy();
        }}
      </Provider>
    )
  });

  test('should have initial state isShow to be false', () => {
    const wrapper = shallow(
      <Provider>
        {() => {}}
      </Provider>
    );
    expect(wrapper.state('isShow')).toBe(false);
  })

  test('should have isShow to be true after handleGetUserConfirm function call', () => {
    let handleFunc;
    const wrapper = shallow(
      <Provider>
        {({ handleGetUserConfirm }) => {
          handleFunc = handleGetUserConfirm;
        }}
      </Provider>
    );
    handleFunc();
    wrapper.update();
    expect(wrapper.state('isShow')).toBe(true);
  })
})
