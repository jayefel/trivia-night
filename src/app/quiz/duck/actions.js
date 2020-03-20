import * as actionTypes from './types';

export const fetchQuizRequest = () => {
  return {
    type: actionTypes.FETCH_QUIZ_REQUEST
  };
}

export const fetchQuizSuccess = (questions) => {
  return {
    type: actionTypes.FETCH_QUIZ_SUCCESS,
    payload: questions
  };
};

export const fetchQuizFailed = (err) => {
  return {
    type: actionTypes.FETCH_QUIZ_FAILED,
    payload: err
  };
};

export const submitAnswer = (userResponse) => {
  return {
    type: actionTypes.SUBMIT_ANSWER,
    payload: userResponse
  };
};