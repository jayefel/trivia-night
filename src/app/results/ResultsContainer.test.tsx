import React from 'react';
import configureStore from 'redux-mock-store';
import { ReactWrapper, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { middlewares } from '../../store';
import { storeStub } from '../../utils/store.stub';
import ResultsContainer from './ResultsContainer';
import ResultsComponent from './ResultsComponent';

const mockStore = configureStore(middlewares);
const historyMock = { push: jest.fn() } as any;

const setup = (initialState = {}) => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ResultsContainer history={historyMock} />
      </BrowserRouter>
    </Provider>
  );
  return wrapper;
};

describe('the ResultsContainer', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    historyMock.push.mockClear();
  });

  afterAll(() => {
    wrapper.unmount();
  });

  describe('when `quiz.completed` is false', () => {
    it('should redirect the user back to the home page', () => {
      let initialState = { ...storeStub };
      wrapper = setup(initialState);

      expect(historyMock.push.mock.calls).toHaveLength(1);
      expect(historyMock.push.mock.calls[0]).toEqual(['/']);
    });
  });

  describe('when `quiz.completed` is true', () => {
    it('the user will be shown the ResultsComponent', () => {
      let initialState = { ...storeStub };
      initialState.quiz.completed = true;
      const wrapper = setup(initialState);

      expect(historyMock.push).not.toHaveBeenCalled();
      expect(wrapper.find(ResultsComponent)).toHaveLength(1);
    });
  });
});