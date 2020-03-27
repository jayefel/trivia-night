import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './home/HomeComponent';
import QuizContainer from './quiz/QuizContainer';
import ResultsContainer from './results/ResultsContainer';
import NotFoundComponent from './common/NotFoundComponent';
import './App.css';

/**
 * @function App
 * A list of routes are listed in this component for the BrowserRouter 
 * provided in RootComponent.
 * @returns Routes
 */
const App: React.FC = () => {
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