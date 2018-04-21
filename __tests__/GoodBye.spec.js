import React from 'react';
import { shallow, mount } from 'enzyme';

import GoodBye from '../src';

describe('GoodBye', () => {
  test('should handleBeforeUnload handle function works expectedly', () => {
    const childFunction = jest.fn();
    const fakeMsg = "hello, world.";
    const evt = {};
    const wrapper = shallow(
      <GoodBye
        when
        alertBeforeUnload
        alertMessage={fakeMsg}
        children={childFunction}
      />
    );
    expect(wrapper.instance().handleBeforeUnload(evt)).toBe(fakeMsg);
    expect(evt.returnValue).toBe(fakeMsg);
  });
})
