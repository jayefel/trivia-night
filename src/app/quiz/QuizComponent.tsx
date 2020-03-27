import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { History } from 'history';
import { DispatchProps, StateProps } from './QuizContainer';
import LoadingComponent from '../common/LoadingComponent';
import './QuizComponent.css';

/**
 * @function QuizErrorComponent
 * A component to show when the quiz has encountered erors during loading.
 * @returns JSX.Element
 */

export const QuizErrorComponent = () => {
  return <h1 className="quiz-fetch-error">An error occured while loading the game.</h1>;
};

/**
 * @function StartOverLink
 * A memoized "Start Over" link component instead of re-rendering on each new question
 * a bit of an overkill for such a small component but using it for illustration purposes.
 * @returns JSX.Element (memoized)
 */
export const StartOverLink = React.memo(() => (
  <Link className="mx-auto restart-btn" to="/">
    <i className="fa fa-redo"></i> Start Over
  </Link>
));

/**
 * @function QuestionPagination
 * Responsible for showing the question number the user is on, as well as the total number of questions.
 * @param currentQuestionIndex
 * @param totalNumOfQuestions
 * @returns JSX.Element
 */

interface QuestionPaginationProps {
  currentQuestionIndex: number;
  totalNumOfQuestions: number
}

export const QuestionPagination: React.FC<QuestionPaginationProps> = ({
  currentQuestionIndex,
  totalNumOfQuestions
}) => {
  return <p>{currentQuestionIndex + 1} of {totalNumOfQuestions}</p>
};

/**
 * @function UserResponseButtons
 * Renders the TRUE and FALSE buttons which are responsible
 * for answering the quiz and advancing to the next question
 * @param props
 * @returns JSX.Element
 */

interface UserResponseButtonsProps {
  handleUserResponse: (answer: boolean) => void
}

export const UserResponseButtons: React.FC<UserResponseButtonsProps> = ({ handleUserResponse }) => (
  <div className="response-buttons-container">
    <button className="btn btn-md btn-success" onClick={() => handleUserResponse(true)}>
      <i className="fa fa-thumbs-up"></i> TRUE
    </button>
    <button className="btn btn-md btn-danger" onClick={() => handleUserResponse(false)}>
      <i className="fa fa-thumbs-down"></i> FALSE
    </button>
  </div>
);

/**
 * @function QuizComponent
 * The main component that fetches the quiz from the api and render the quiz to the user
 * @param props
 * @return JSX.Element
 */

interface QuizComponentProps extends DispatchProps, StateProps {
  history: History;
}

const QuizComponent: React.FC<QuizComponentProps> = ({
  history,
  quiz: { questions, loading, error },
  fetchQuiz,
  submitAnswer
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleUserResponse = (userResponse: boolean) => {
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

  if (error) { return <QuizErrorComponent />; }
  if (loading) { return <LoadingComponent />; }

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