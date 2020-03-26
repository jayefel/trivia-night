import { combineReducers } from 'redux';
import { Quiz } from './app/quiz/duck/types';
import { quizReducer } from './app/quiz/duck/reducers';

export interface AppState {
  quiz: Quiz
};

const rootReducer = combineReducers({
  quiz: quizReducer
});

export default rootReducer;