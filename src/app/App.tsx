import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const HomeComponent = lazy(() => import('./home/HomeComponent'));
const QuizContainer = lazy(() => import('./quiz/QuizContainer'));
const ResultsContainer = lazy(() => import('./results/ResultsContainer'));

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
                <Route path='/' exact component={HomeComponent} />
                <Route path='/quiz' component={QuizContainer} />
                <Route path='/results' component={ResultsContainer} />
              </Switch>
            </BrowserRouter>
          </Suspense>
        </div>
      </div>
    </div>
  )
};

export default App;