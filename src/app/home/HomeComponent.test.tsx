import React from 'react';
import { shallow, mount, EnzymeAdapter, ReactWrapper } from 'enzyme';
import HomeComponent from './HomeComponent';
import { BrowserRouter } from 'react-router-dom';
import { WSAVERNOTSUPPORTED } from 'constants';

describe('HomeComponent', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <HomeComponent />
      </BrowserRouter>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders without error', () => {
    expect(wrapper.length).toBe(1);
  });

  test('has a title element', () => {
    expect(wrapper.find('.heading').length).toBe(1);
  });

  test('has game introduction paragrph', () => {
    expect(wrapper.find('.introduction').length).toBe(1);
  });

  test('has game start button', () => {
    expect(wrapper.find('a#start-btn').length).toBe(1);
  });
});