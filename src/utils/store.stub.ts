import { AppState } from './../reducers';

/**
 * A stub for the app state (redux state) for testing purposes
 */
export const storeStub: AppState = {
  quiz: {
    score: 0,
    questions: [
      {
        id: 1,
        category: 'Category #1',
        question: 'Earth is flat',
        correctAnswer: false,
        userResponse: null
      },
      {
        id: 2,
        category: 'Category #2',
        question: 'Sharks have legs and they can walk on land',
        correctAnswer: false,
        userResponse: null
      }
    ],
    loading: false,
    completed: false,
    error: false
  }
};