import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './app/common/ErrorBoundary';
import store from "./store";

/**
 * @function RootComponent
 * The root level component responsible for providing
 * an error boundary, the redux store, and a router to the application. 
 * @param props
 * @returns JSX.Element
 */

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