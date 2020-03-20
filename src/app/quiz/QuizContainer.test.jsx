import React from 'react';
import { shallow } from 'enzyme';
import QuizContainer from './QuizContainer';
import LoadingComponent from '../common/LoadingComponent';
import { storeFactory } from '../../utils/testHelper';
import { quizReducer } from './duck/reducers';
import { questionsStub } from './__stubs__/questions.stub';
import * as actions from './duck/actions';
import {
  StartOverLink,
  QuestionPagination,
  UserResponseButtons,
  QuizErrorComponent
} from './QuizComponent';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<QuizContainer store={store} />).dive().dive();
  return wrapper;
};

describe('the QuizComponent', () => {
  describe('during loading phase', () => {
    let wrapper;

    beforeEach(() => {
      const quiz = quizReducer(null, actions.fetchQuizRequest());
      const store = storeFactory({ quiz });
      wrapper = shallow(<QuizContainer store={store} />).dive().dive();
      return wrapper;
    });

    it('should show the loading component while fetching data', () => {
      expect(wrapper.find(LoadingComponent)).toHaveLength(1);
    });
  });

  describe('with fetched data and no errors', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { quiz: quizReducer(null, actions.fetchQuizSuccess(questionsStub)) };
      wrapper = setup(initialState);
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
      const initialState = { quiz: quizReducer(null, actions.fetchQuizFailed(error)) };
      const wrapper = setup(initialState);
      expect(wrapper.find(QuizErrorComponent)).toHaveLength(1);
    });
  });
});