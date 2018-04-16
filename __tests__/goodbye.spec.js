import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from '../src';

test('<Provider /> exists', () => {
  const wrapper = shallow(
    <Provider>
      {() => {}}
    </Provider>
  );
  expect(wrapper).toBeTruthy();
});
