import * as actionTypes from './actionTypes';
import {
  UserResponse,
  FetchQuizRequestAction,
  FetchQuizFailedAction,
  FetchQuizSuccessAction,
  SubmitAnswerAction
} from './types';

export const fetchQuizRequest = (): FetchQuizRequestAction => {
  return {
    type: actionTypes.FETCH_QUIZ_REQUEST
  };
};

export const fetchQuizSuccess = (questions: any): FetchQuizSuccessAction => {
  return {
    type: actionTypes.FETCH_QUIZ_SUCCESS,
    payload: questions
  };
};

export const fetchQuizFailed = (error: Error): FetchQuizFailedAction => {
  return {
    type: actionTypes.FETCH_QUIZ_FAILED,
    payload: error
  };
};

export const submitAnswer = (userResponse: UserResponse): SubmitAnswerAction => {
  return {
    type: actionTypes.SUBMIT_ANSWER,
    payload: userResponse
  };
};