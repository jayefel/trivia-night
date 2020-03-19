import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizComponent.css';
import LoadingComponent from '../LoadingComponent';

const currentQuestionNumber = (questionIndex) => {
  return questionIndex + 1;
};

const QuizComponent = ({
  history,
  quiz: { questions },
  fetchQuestions,
  submitAnswer
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleQuestionResponse = userResponse => {
    submitAnswer(currentQuestionIndex, userResponse);
    setCurrentQuestionIndex(current => current + 1);

    if (currentQuestionIndex === questions.length - 1) {
      history.push('/results'); // show results if user has answered all questions
    };
  };

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  if (questions.length === 0) {
    return <LoadingComponent />;
  }

  const {
    id,
    category,
    question
  } = questions[currentQuestionIndex];

  return (
    <div className="quiz-container" key={id}>
      <h2>{category}</h2>
      <h5>{question}</h5>
      <p>{currentQuestionNumber(currentQuestionIndex)} of {questions.length}</p>
      <button className="btn btn-md btn-success" onClick={() => handleQuestionResponse(true)}>
        <i className="fa fa-check"></i> True
          </button>
      <button className="btn btn-md btn-danger" onClick={() => handleQuestionResponse(false)}>
        <i className="fa fa-times"></i> False
          </button>
      <br /><br />
      <Link className="mx-auto restart-btn" to="/">
        <i className="fa fa-redo"></i> Start Over
      </Link>
    </div>
  );
};

export default QuizComponent;