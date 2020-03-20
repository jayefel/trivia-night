import Axios from 'axios';
import { decode } from 'he';
import { Dispatch } from 'redux';
import {
  fetchQuizRequest,
  fetchQuizSuccess,
  fetchQuizFailed,
  submitAnswer
} from './actions';

type Question = {
  id: number,
  category: string,
  question: string,
  correctAnswer: boolean
};

export const fetchQuiz = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchQuizRequest());

    return Axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((res: any) => {
        const questions: Question[] = res.data.results.map((question: any, index: number) => ({
          id: index,
          category: decode(question.category),
          question: decode(question.question),
          correctAnswer: decode(question.correct_answer).toLowerCase() === "true" ? true : false,
          userResponse: null
        }));

        dispatch(fetchQuizSuccess(questions));
      })
      .catch((err: Error) => {
        dispatch(fetchQuizFailed(err))
      });
  };
};

export default {
  fetchQuiz,
  submitAnswer
};