import React from 'react';
import { Link } from 'react-router-dom';
import QuestionResponseComponent from './QuestionResponseComponent';
import './ResultsComponent.css';

const ResultsComponent = ({ quiz }) => {
  return (
    <div className="results-container">
      <h2>
        You scored <br />
        <span>{quiz.score}/{quiz.questions.length}</span>
      </h2>
      <QuestionResponseComponent quiz={quiz} />
      <Link className="btn btn-lg btn-success" to='/'>PLAY AGAIN</Link>
    </div>
  )
};

export default ResultsComponent;