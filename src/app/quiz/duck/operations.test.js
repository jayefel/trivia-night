import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import operations from './operations';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

    const store = mockStore({});

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