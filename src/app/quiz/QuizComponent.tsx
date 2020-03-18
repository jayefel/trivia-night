import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitAnswer } from './duck/actions';
import { fetchQuestions } from './duck/operations';
import './QuizComponent.css';

type Quiz = {
  id: number;
  category: string;
  question: string;
  correctAnswer: boolean;
  userResponse: null;
};

interface Props extends RouteComponentProps<any> {
  quiz: any,
  fetchQuestions: any,
  submitAnswer: any
};

const currentQuestionNumber = (questionIndex: number) => {
  return questionIndex + 1;
};

const QuizComponent: React.FC<Props> = ({ quiz: { questions }, history, fetchQuestions, submitAnswer }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  /**
   * Takes a boolean as the user's answer, then stores the answer
   * @function submitAnswer
   * @param answer 
   * @returns void
   */
  const handleQuestionResponse = (answer: boolean) => {
    // Navigate away to results page once last question is answered
    if (currentQuestionIndex === questions.length - 1) {
      history.push('/results');
    };

    submitAnswer(currentQuestionIndex, answer);
    setCurrentQuestionIndex(current => current + 1);
  };

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  if (questions.length === 0) {
    return (
      <img src="/img/loading.svg" alt="loading..." />
    )
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
  )
};

const mapStateToProps = (state: any) => {
  return { quiz: state.quiz };
};

export default connect(mapStateToProps, { fetchQuestions, submitAnswer })(QuizComponent);