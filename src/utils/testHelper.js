import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../store";
import rootReducer from "../reducers";

/**
 * Factory for creating stores for testing
 * Helps to set up initialState and middlewares the app uses
 * @param {*} initialState 
 * @returns Redux.store
 */
export const storeFactory = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};