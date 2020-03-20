import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingComponent from '../common/LoadingComponent';
import './QuizComponent.css';

export const QuizErrorComponent = () => {
  return <h1 className="quiz-fetch-error">An error occured while loading the game.</h1>;
};

export const StartOverLink = React.memo(() => (
  <Link className="mx-auto restart-btn" to="/">
    <i className="fa fa-redo"></i> Start Over
  </Link>
));

export const QuestionPagination = ({ currentQuestionIndex, totalNumOfQuestions }) => (
  <p>{currentQuestionIndex + 1} of {totalNumOfQuestions}</p>
);

export const UserResponseButtons = ({ handleUserResponse }) => (
  <div className="response-buttons-container">
    <button className="btn btn-md btn-success" onClick={() => handleUserResponse(true)}>
      <i className="fa fa-thumbs-up"></i> TRUE
    </button>
    <button className="btn btn-md btn-danger" onClick={() => handleUserResponse(false)}>
      <i className="fa fa-thumbs-down"></i> FALSE
    </button>
  </div>
);

const QuizComponent = ({
  history,
  quiz: { questions, loading, error },
  fetchQuiz,
  submitAnswer
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleUserResponse = userResponse => {
    submitAnswer({
      questionIndex: currentQuestionIndex,
      userResponse
    });
    setCurrentQuestionIndex(current => current + 1);

    if (currentQuestionIndex === questions.length - 1) {
      history.push('/results'); // show results if user has answered all questions
    };
  };

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  if (error) {
    return <QuizErrorComponent />;
  }

  if (loading) {
    return <LoadingComponent />;
  }

  const {
    category,
    question
  } = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2 className="category">{category}</h2>
      <h5 className="question">{question}</h5>
      <QuestionPagination currentQuestionIndex={currentQuestionIndex} totalNumOfQuestions={questions.length} />
      <UserResponseButtons handleUserResponse={handleUserResponse} />
      <StartOverLink />
    </div>
  );
};

export default QuizComponent;