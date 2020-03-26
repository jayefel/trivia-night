import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

export const middlewares = [thunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;