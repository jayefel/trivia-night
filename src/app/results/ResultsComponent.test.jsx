import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ResultsContainer from './ResultsContainer';
import { storeStub } from '../../utils/store.stub';

describe('the ResultsComponent', () => {
  let store, wrapper, historyMock, state;

  beforeEach(() => {
    state = { ...storeStub };

    const mockStore = configureStore();
    store = mockStore(state);

    historyMock = {
      push: jest.fn()
    };
  });

  describe('when the `completed` prop is true (i.e. there is data to show)', () => {
    beforeEach(() => {
      state.quiz.completed = true;
      wrapper = shallow(<ResultsContainer store={store} history={historyMock} />).dive().dive();
    })
    it('should render without errors', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('should not redirect to the home page', () => {
      expect(historyMock.push).not.toHaveBeenCalled();
      expect(historyMock.push.mock.calls).toHaveLength(0);
    });
  });

  describe('when the `completed` prop is false (i.e. there is no data to show)', () => {
    beforeEach(() => {
      state.quiz.completed = false;
      wrapper = shallow(<ResultsContainer store={store} history={historyMock} />).dive().dive();
    });

    it('should redirect to the home page', () => {
      expect(historyMock.push).toHaveBeenCalled();
      expect(historyMock.push.mock.calls).toHaveLength(1);
      expect(historyMock.push.mock.calls[0]).toEqual(['/']);
    });
  });
});