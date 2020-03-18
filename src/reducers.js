import { combineReducers } from 'redux';
import { quizReducer } from './app/quiz/duck/reducers';

const rootReducer = combineReducers({
  quiz: quizReducer
});

export default rootReducer;