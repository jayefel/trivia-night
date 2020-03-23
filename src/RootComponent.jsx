import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './app/common/ErrorBoundary';

const RootComponent = props => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <img src="/img/logo.png" className="logo mx-auto" alt="logo" />
            <div className="offset-md-3 col-sm-6">
              <div className="app">
                {props.children}
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider >
    </ErrorBoundary >
  )
};

export default RootComponent;