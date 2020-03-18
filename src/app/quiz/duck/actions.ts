import * as actionTypes from './types';

export const fetchQuestionsRequest = () => {
  return {
    type: actionTypes.FETCH_QUESTIONS_REQUEST
  };
}

export const fetchQuestionsSuccess = (questions: any) => {
  return {
    type: actionTypes.FETCH_QUESTIONS_SUCCESS,
    payload: questions
  };
};

export const fetchQuestionsFailed = (err: Error) => {
  return {
    type: actionTypes.FETCH_QUESTIONS_FAILURE,
    payload: err
  };
};

export const resetQuestions = () => {
  return {
    type: actionTypes.RESET_QUESTIONS
  };
}

export const submitAnswer = (questionIndex: number, userResponse: boolean) => {
  return {
    type: actionTypes.SUBMIT_ANSWER,
    payload: {
      questionIndex,
      userResponse
    }
  };
};