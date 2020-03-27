import { combineReducers } from 'redux';
import { Quiz } from './app/quiz/duck/types';
import { quizReducer } from './app/quiz/duck/reducers';

/**
 * The root reducer for the application store
 * using combineReducers despite only having reducer for 
 * future expandability.
 */

const rootReducer = combineReducers({
  quiz: quizReducer
});

export interface AppState {
  quiz: Quiz
};

export default rootReducer;