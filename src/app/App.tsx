import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ErrorBoundary from './common/ErrorBoundary';
import './App.css';

const HomeComponent = lazy(() => import('./home/HomeComponent'));
const QuizContainer = lazy(() => import('./quiz/QuizContainer'));
const ResultsContainer = lazy(() => import('./results/ResultsContainer'));
const NotFoundComponent = lazy(() => import('./404/NotFoundComponent'));

const Spinner = () => {
  return (
    <img src="/img/loading.svg" alt="loading..." />
  );
};

const App = () => {
  return (
    <div className="container-fluid">
      <img src="/img/logo.png" className="logo mx-auto" alt="logo" />
      <div className="offset-md-3 col-sm-6">
        <div className="app">
          <Suspense fallback={<Spinner />}>
            <BrowserRouter>
              <Switch>
                <ErrorBoundary>
                  <Route path='/' exact component={HomeComponent} />
                  <Route path='/quiz' component={QuizContainer} />
                  <Route path='/results' component={ResultsContainer} />
                  <Route path='/404' component={NotFoundComponent} />
                  <Redirect to='404' />
                </ErrorBoundary>
              </Switch>
            </BrowserRouter>
          </Suspense>
        </div>
      </div>
    </div>
  )
};

export default App;