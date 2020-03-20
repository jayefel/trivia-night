import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers"
import { middlewares } from "../store";

export const storeFactory = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};