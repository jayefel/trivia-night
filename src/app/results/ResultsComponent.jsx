import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './ResultsComponent.css';
import LoadingComponent from '../LoadingComponent';

const ResultsComponent = ({ quiz }) => {
  const score = useMemo(() => {
    return (
      <span>{quiz.score}/{quiz.questions.length}</span>
    )
  }, [quiz]);

  const quizResponseDetails = useMemo(() => {
    if (quiz.questions.length === 0) {
      return <LoadingComponent />;
    }

    return quiz.questions.map(q => {
      if (q.userResponse === q.correctAnswer) {
        return (
          <div className="question-row" key={q.id}>
            <div className="question">
              {q.id + 1}. {q.question}
            </div>
            <div className="user-response correct">
              <i className="fa fa-check"></i> You answered: {q.userResponse ? 'True' : 'False'}
            </div>
          </div>
        )
      } else {
        return (
          <div className="question-row" key={q.id}>
            <div className="question">
              {q.id + 1}. {q.question}
            </div>
            <div className="user-response incorrect">
              <i className="fa fa-times"></i> You answered: {q.userResponse ? 'True' : 'False'}
            </div>
          </div>
        )
      }
    });
  }, [quiz.questions]);

  return (
    <div className="results-container">
      <h2>
        You scored <br />
        {score}
      </h2>
      <div className="question-details-container">
        {quizResponseDetails}
      </div>
      <Link className="btn btn-lg btn-success" to='/'>PLAY AGAIN</Link>
    </div>
  )
};

export default ResultsComponent;