import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './home/HomeComponent';
import QuizContainer from './quiz/QuizContainer';
import ResultsContainer from './results/ResultsContainer';
import NotFoundComponent from './common/NotFoundComponent';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeComponent} />
      <Route path='/quiz' component={QuizContainer} />
      <Route path='/results' component={ResultsContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
};

export default App;