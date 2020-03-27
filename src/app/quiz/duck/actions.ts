import * as actionTypes from './actionTypes';
import {
  UserResponse,
  FetchQuizRequestAction,
  FetchQuizFailedAction,
  FetchQuizSuccessAction,
  SubmitAnswerAction
} from './types';

/**
 * @function fetchQuizRequest
 * An action creator for the FETCH_QUIZ_REQUEST action.
 * @returns FetchQuizRequestAction
 */

export const fetchQuizRequest = (): FetchQuizRequestAction => {
  return {
    type: actionTypes.FETCH_QUIZ_REQUEST
  };
};

/**
 * @function fetchQuizSuccess
 * An action creator for the FETCH_QUIZ_SUCCESS action.
 * @param questions
 * @returns FetchQuizSuccessAction
 */

export const fetchQuizSuccess = (questions: any): FetchQuizSuccessAction => {
  return {
    type: actionTypes.FETCH_QUIZ_SUCCESS,
    payload: questions
  };
};

/**
 * @function fetchQuizFailed
 * An action creator for the FETCH_QUIZ_FAILED action.
 * @param error
 * @returns FetchQuizFailedAction
 */

export const fetchQuizFailed = (error: Error): FetchQuizFailedAction => {
  return {
    type: actionTypes.FETCH_QUIZ_FAILED,
    payload: error
  };
};

/**
 * @function submitAnswer
 * An action creator for the SUBMIT_ANSWER action.
 * @param userResponse
 * @returns SubmitAnswerAction
 */

export const submitAnswer = (userResponse: UserResponse): SubmitAnswerAction => {
  return {
    type: actionTypes.SUBMIT_ANSWER,
    payload: userResponse
  };
};