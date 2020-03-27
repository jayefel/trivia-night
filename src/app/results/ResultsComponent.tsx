import React from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../quiz/duck/types';
import QuestionResponseComponent from './QuestionResponseComponent';
import './ResultsComponent.css';

/**
 * @function ResultsComponent
 * Shows the score and detailed responses to each question asked in the quiz
 * as well as a PLAY AGAIN button that will restart the game. 
 * @param props
 * @returns JSX.Element
 */

interface ResultsComponentProps {
  quiz: Quiz;
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ quiz }): JSX.Element => {
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