import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount, ReactWrapper } from 'enzyme';
import { AppState } from '../../reducers';
import { quizReducer } from './duck/reducers';
import { questionsStub } from './__stubs__/questions.stub';
import { middlewares } from '../../store';
import QuizContainer from './QuizContainer';
import LoadingComponent from '../common/LoadingComponent';
import * as actions from './duck/actions';
import {
  StartOverLink,
  QuestionPagination,
  UserResponseButtons,
  QuizErrorComponent
} from './QuizComponent';

const mockStore = configureStore(middlewares);
const historyMock = { push: jest.fn() } as any;

const setup = (initialState: AppState) => {
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <QuizContainer history={historyMock} />
      </BrowserRouter>
    </Provider>
  );

  return wrapper;
};

describe('the QuizComponent', () => {
  describe('during loading phase', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      const quiz = quizReducer(null!, actions.fetchQuizRequest());
      wrapper = setup({ quiz });
    });

    afterAll(() => {
      wrapper.unmount();
    });

    it('should show the loading component while fetching data', () => {
      expect(wrapper.find(LoadingComponent)).toHaveLength(1);
    });
  });

  describe('with fetched data and no errors', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      const initialState: AppState = { quiz: quizReducer(null!, actions.fetchQuizSuccess(questionsStub)) };
      wrapper = setup(initialState);
    });

    afterAll(() => {
      wrapper.unmount();
    });

    it('should render without errors', () => {
      expect(wrapper.find('.quiz-container')).toHaveLength(1);
    });

    it('should have a category field', () => {
      expect(wrapper.find('.category')).toHaveLength(1);
    });

    it('should have a QuestionPagination component', () => {
      expect(wrapper.find(QuestionPagination)).toHaveLength(1);
    });

    it('should have a UserResponseButtons component', () => {
      expect(wrapper.find(UserResponseButtons)).toHaveLength(1);
    });

    it('should have a StartOver component', () => {
      expect(wrapper.find(StartOverLink)).toHaveLength(1);
    });
  });

  describe('with error during fetch', () => {
    it('should show the error message', () => {
      const error = new Error('An error occured while fetching the quiz.');
      const initialState: AppState = { quiz: quizReducer(null!, actions.fetchQuizFailed(error)) };
      const wrapper = setup(initialState);
      expect(wrapper.find(QuizErrorComponent)).toHaveLength(1);
      wrapper.unmount();
    });
  });
});