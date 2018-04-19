import React from 'react';
import { withGoodBye } from '../src';
import { shallow } from 'enzyme';

describe('withGoodBye', () => {
  const BaseComponent = () => <div />;
  const EnhancedComponent = withGoodBye(BaseComponent);

  test('should have correct displayName', () => {
    expect(EnhancedComponent.displayName).toBe(`withGoodBye(${BaseComponent.name})`);
  })

  test('should receive own props from EnhancedComponent to BaseComponent', () => {
    const myProps = { foo: 1, bar: 2 };
    const wrapper = shallow(<EnhancedComponent {...myProps}/>);
    expect(wrapper.dive().find(BaseComponent).props().foo).toEqual(1);
    expect(wrapper.dive().find(BaseComponent).props().bar).toEqual(2);
  })

  test('should receive getUserConfirmation prop function', () => {
    const wrapper = shallow(<EnhancedComponent />);
    expect(wrapper.dive().find(BaseComponent).props().getUserConfirmation).toBeDefined();
  })

});
