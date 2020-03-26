import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from "enzyme";
import { MemoryRouter } from 'react-router';
import { storeStub } from '../utils/store.stub';
import { Provider } from 'react-redux';
import { middlewares } from '../store';
import App from './App';
import HomeComponent from './home/HomeComponent';
import QuizComponent from './quiz/QuizComponent';
import ResultsComponent from './results/ResultsComponent';
import NotFoundComponent from './common/NotFoundComponent';

describe('the App component', () => {
  it('should render without error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('the app router', () => {
  it('should successfully render the home page when the route is `/`', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(HomeComponent)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should successfully render the quiz page when the route is `/quiz`', () => {
    const mockStore = configureStore(middlewares);
    const store = mockStore(storeStub);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/quiz']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(QuizComponent)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should successfully render the results page when the route is `/quiz`', () => {
    const mockStore = configureStore(middlewares);
    const storeState = { ...storeStub };
    storeState.quiz.completed = true;
    const store = mockStore(storeState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/results']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(ResultsComponent)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should navigate back to the homepage if there is no results to show while on the `/results` page', () => {
    const mockStore = configureStore(middlewares);
    const storeState = { ...storeStub };
    storeState.quiz.completed = false;
    const store = mockStore(storeState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/results']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(HomeComponent)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should show page not found when a route is invalid', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/invalid-link']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFoundComponent)).toHaveLength(1);
    wrapper.unmount();
  });
});