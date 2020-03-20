import { initialState, quizReducer } from './reducers';
import { storeStub } from '../../../utils/store.stub';
import { submitAnswer, fetchQuizRequest, fetchQuizSuccess, fetchQuizFailed } from './actions';

describe('quizReudcer ', () => {
  describe('when handling the action type FETCH_QUIZ_REQUEST', () => {
    it('the new state has a status of loading', () => {
      const newState = quizReducer([], fetchQuizRequest());
      expect(newState.loading).toBeTruthy();
    });
  });

  describe('when handling the action type FETCH_QUIZ_SUCCESS', () => {
    it('the new state contains the fetched quiz', () => {
      const newState = quizReducer(initialState, fetchQuizSuccess([...storeStub.quiz.questions]));
      expect(newState).toEqual({
        ...initialState,
        loading: false,
        questions: storeStub.quiz.questions
      });
    });
  });

  describe('handles actions of type FETCH_QUIZ_FAILED', () => {
    it('receive the correct error payload', () => {
      const error = new Error('An error occured while loading the game.');
      const newState = quizReducer(initialState, fetchQuizFailed(error));
      expect(newState).toEqual({
        ...initialState,
        loading: false,
        error: error
      });
    })
  });

  describe('when handling the action type SUBMIT_ANSWER', () => {
    describe('the `complete` field of the quiz', () => {
      let previousState, newState;

      beforeEach(() => {
        previousState = { ...storeStub.quiz };
        newState = quizReducer(previousState, submitAnswer({
          questionIndex: 0,
          userResponse: true
        }));
      });

      it('is false when user is not responding to the last question', () => {
        const expectedState = { ...previousState };
        expectedState.questions[0].userResponse = true;
        expectedState.completed = false;
        expect(newState).toEqual(expectedState);
      });

      it('user responds to the last question in the quiz', () => {
        newState = quizReducer(newState, submitAnswer({
          questionIndex: 1,
          userResponse: true
        }));
        const expectedState = { ...previousState };
        expectedState.questions[1].userResponse = true;
        expectedState.completed = true;
        expect(newState).toEqual(expectedState);
      });
    });

    describe('the `score` field of the quiz', () => {
      let previousState;

      beforeEach(() => {
        previousState = { ...storeStub.quiz };
      });

      it('increments when the user answers correctly', () => {
        const newState = quizReducer(previousState, submitAnswer({
          questionIndex: 0,
          userResponse: previousState.questions[0].correctAnswer
        }));
        expect(newState.score).toBe(previousState.score + 1);
      });

      it('does not increment when the user answers incorrectly', () => {
        const newState = quizReducer(previousState, submitAnswer({
          questionIndex: 0,
          userResponse: !previousState.questions[0].correctAnswer
        }));
        expect(newState.score).toBe(previousState.score);
      });
    });

    describe('when handling an action of `unknown` type', () => {
      it('should return the previous state without any modifications', () => {
        const newState = quizReducer([], {});
        expect(newState).toEqual([]);
      });
    });
  });
});