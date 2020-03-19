import React from 'react';
import { shallow } from "enzyme";
import App from './App';

describe('App component', () => {
  it('renders without error', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.length).toBe(1);
  });
});