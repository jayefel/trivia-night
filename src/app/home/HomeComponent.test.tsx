import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HomeComponent from './HomeComponent';

describe('HomeComponent', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeComponent />);
  });

  it('should render without error', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have a title element', () => {
    expect(wrapper.find('.heading')).toHaveLength(1);
  });

  it('should have a introduction paragrph', () => {
    expect(wrapper.find('.introduction')).toHaveLength(1);
  });

  it('should have a `BEGIN` button', () => {
    expect(wrapper.find('#start-btn')).toHaveLength(1);
  });
});