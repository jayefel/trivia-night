import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from "./store";
import ErrorBoundary from './app/common/ErrorBoundary';

interface RootComponentProps {
  children?: JSX.Element
}

const RootComponent: React.FC<RootComponentProps> = props => {
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