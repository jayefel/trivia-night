import { Reducer } from 'react';
import { Quiz, FetchQuizActions } from './types';
import * as actionTypes from './actionTypes';

export const initialState: Quiz = {
  score: 0,
  questions: [],
  loading: true,
  completed: false,
  error: false
};

/**
 * @function quizReducer
 * A reducer for questions, responsible for fetching questions from the provided API or fail
 * @param state
 * @param action
 */
export const quizReducer: Reducer<Quiz, FetchQuizActions> = (state = initialState, action): Quiz => {
  switch (action.type) {
    case actionTypes.FETCH_QUIZ_REQUEST:
      return initialState;

    case actionTypes.FETCH_QUIZ_SUCCESS:
      return { ...state, loading: false, questions: action.payload };

    case actionTypes.FETCH_QUIZ_FAILED:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.SUBMIT_ANSWER:
      const newState = { ...state };
      const { questionIndex, userResponse } = action.payload;
      newState.questions[questionIndex].userResponse = userResponse;

      if (questionIndex === newState.questions.length - 1) {
        newState.completed = true;
      };

      if (newState.questions[questionIndex].userResponse === newState.questions[questionIndex].correctAnswer) {
        newState.score = newState.score + 1;
      }

      return newState;

    default:
      return state;
  }
};
