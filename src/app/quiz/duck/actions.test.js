import * as actions from "./actions";
import * as actionTypes from "./types";
import { storeStub } from "../../../utils/store.stub";

describe('the fetchQuizRequest action creator', () => {
  let action;

  beforeEach(() => {
    action = actions.fetchQuizRequest();
  });

  it('should have the correct type', () => {
    expect(action.type).toEqual(actionTypes.FETCH_QUIZ_REQUEST);
  });

  it('should have the correct payload', () => {
    expect(action.payload).toBeFalsy();
  });
});

describe('the fetchQuizSuccess action creator', () => {
  let action, payload = storeStub.quiz;

  beforeEach(() => {
    action = actions.fetchQuizSuccess(payload);
  });

  it('should have the correct type', () => {
    expect(action.type).toEqual(actionTypes.FETCH_QUIZ_SUCCESS);
  });

  it('should have the correct payload', () => {
    expect(action.payload).toEqual(payload);
  });
});

describe('the fetchQuizFailed action creator', () => {
  let action, error;

  beforeEach(() => {
    error = new Error('An error occured!');
    action = actions.fetchQuizFailed(error);
  });

  it('should have the correct type', () => {
    expect(action.type).toEqual(actionTypes.FETCH_QUIZ_FAILED);
  });

  it('should have the correct payload', () => {
    expect(action.payload).toEqual(error);
  });
});