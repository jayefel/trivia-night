import * as actionTypes from './types';

const initialState = {
  questions: [],
  completed: false,
  score: 0
};

/**
 * Reducer for questions, responsible for fetching questions from the provided API or fail
 * @function quizReducer
 * @param state 
 * @param action 
 */
export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_REQUEST:
      return initialState;

    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload };

    case actionTypes.FETCH_QUESTIONS_FAILURE:
      return state;

    case actionTypes.RESET_QUESTIONS:
      return initialState;

    case actionTypes.SUBMIT_ANSWER:
      const { questionIndex, userResponse } = action.payload;
      const quiz = { ...state };
      quiz.questions[questionIndex].userResponse = userResponse;

      if (questionIndex === quiz.questions.length - 1) {
        quiz.completed = true;
      };

      if (quiz.questions[questionIndex].userResponse === quiz.questions[questionIndex].correctAnswer) {
        console.log('answered correctly, incrementing score');
        quiz.score = quiz.score + 1;
      }

      return quiz;

    default:
      return state; // TODO: throw an error instead
  }
};
