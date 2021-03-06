import Axios from 'axios';
import { decode } from 'he';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AppState } from './../../../reducers';
import {
  Question,
  FetchQuizFailedAction,
  FetchQuizRequestAction,
  FetchQuizSuccessAction,
  FetchQuizActions,
} from './types';
import {
  fetchQuizRequest,
  fetchQuizSuccess,
  fetchQuizFailed,
  submitAnswer
} from './actions';

/**
 * @function fetchQuiz
 * A thunk action that dispatches actions in the following order:
 * fetchQuizRequest > fetchQuizRequestSuccess (if the request is successful), or
 * fetchQuizRequest > fetchQuizRequestFailed (if the request failed)
 * @returns ThunkAction
 */

export const fetchQuiz = (): ThunkAction<Promise<void>, AppState, void, FetchQuizActions> => {
  return (dispatch: ThunkDispatch<{}, {}, FetchQuizActions>): Promise<void> => {
    dispatch<FetchQuizRequestAction>(fetchQuizRequest());

    return Axios.get<Question[]>('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((res: any) => {
        const questions: Question[] = res.data.results.map((question: any, index: number) => ({
          id: index,
          category: decode(question.category),
          question: decode(question.question),
          correctAnswer: decode(question.correct_answer).toLowerCase() === "true" ? true : false,
          userResponse: null
        }));

        dispatch<FetchQuizSuccessAction>(fetchQuizSuccess(questions));
      })
      .catch((error: Error) => {
        dispatch<FetchQuizFailedAction>(fetchQuizFailed(error));
      });
  };
};

export default {
  fetchQuiz,
  submitAnswer
};