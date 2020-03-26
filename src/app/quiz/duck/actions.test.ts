import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import { storeStub } from './../../../utils/store.stub';
import {
  FetchQuizSuccessAction,
  FetchQuizFailedAction,
  FetchQuizRequestAction
} from './types';

describe('the fetchQuizRequest action creator', () => {
  let action: FetchQuizRequestAction;

  beforeEach(() => {
    action = actions.fetchQuizRequest();
  });

  it('should have the correct type', () => {
    expect(action.type).toEqual(actionTypes.FETCH_QUIZ_REQUEST);
  });

  it('should have no payload information', () => {
    expect(Object.keys(action)).not.toContain('payload');
  });
});

describe('the fetchQuizSuccess action creator', () => {
  let action: FetchQuizSuccessAction;
  let payload = storeStub.quiz;

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
  let action: FetchQuizFailedAction;
  let error: Error;

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