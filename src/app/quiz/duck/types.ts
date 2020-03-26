import * as actionTypes from './actionTypes';

export interface Quiz {
  score: number,
  questions: Question[],
  loading: boolean,
  completed: boolean,
  error: boolean | Error
};

export interface Question {
  id: number;
  category: string;
  question: string;
  correctAnswer: boolean;
  userResponse: boolean | null
};


export interface Quiz {
  score: number,
  questions: Question[],
  loading: boolean,
  completed: boolean,
  error: boolean | Error
};

export interface FetchQuizRequestAction {
  type: typeof actionTypes.FETCH_QUIZ_REQUEST;
};

export interface FetchQuizSuccessAction {
  type: typeof actionTypes.FETCH_QUIZ_SUCCESS;
  payload: Question[];
};

export interface FetchQuizFailedAction {
  type: typeof actionTypes.FETCH_QUIZ_FAILED;
  payload: Error;
};

export interface SubmitAnswerAction {
  type: typeof actionTypes.SUBMIT_ANSWER;
  payload: UserResponse;
};

export interface UserResponse {
  questionIndex: number;
  userResponse: boolean;
};

export type FetchQuizActions = FetchQuizRequestAction
  | FetchQuizSuccessAction
  | FetchQuizFailedAction
  | SubmitAnswerAction;

export type QuizActions = FetchQuizActions | SubmitAnswerAction;