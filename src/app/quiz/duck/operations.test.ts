import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';
import { middlewares } from './../../../store';
import { AppState } from './../../../reducers';
import { FetchQuizActions } from './types';
import operations from './operations';

type DispatchExts = ThunkDispatch<AppState, void, FetchQuizActions>;

const mockStore = configureStore<{}, DispatchExts>(middlewares);

describe('fetchQuiz operation', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('fetches questions from the trivia api', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          results: [
            {
              category: 'poop',
              question: 'do you poop?',
              correct_answer: 'True',
              userResponse: null
            },
            {
              category: 'bug',
              question: 'do you have bugs?',
              correct_answer: 'False',
              userResponse: null
            }
          ]
        }
      })
    });

    const store = mockStore();

    return store.dispatch(operations.fetchQuiz())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual([
          { type: 'FETCH_QUIZ_REQUEST' },
          {
            type: 'FETCH_QUIZ_SUCCESS', payload: [
              {
                id: 0,
                category: 'poop',
                question: 'do you poop?',
                correctAnswer: true,
                userResponse: null
              },
              {
                id: 1,
                category: 'bug',
                question: 'do you have bugs?',
                correctAnswer: false,
                userResponse: null
              }
            ]
          }
        ])
      });
  });
});