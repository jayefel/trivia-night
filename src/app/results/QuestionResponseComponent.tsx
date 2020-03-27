import React from 'react';
import { Question, Quiz } from '../quiz/duck/types';

/**
 * @function QuestionResponseRow
 * Shows ONE question and the user's corresponding answer
 * @param props
 * @returns JSX.Element
 */

interface QuestionResponseRowProps {
  question: Question;
  correctness: boolean;
  userResponse: boolean | null;
}

const QuestionResponseRow: React.FC<QuestionResponseRowProps> = ({
  question,
  correctness,
  userResponse
}): JSX.Element => {
  return (
    <div className="question-row">
      <div className="question">
        {question.id + 1}. {question.question}
      </div>
      <div className={`user-response ${correctness ? 'correct' : 'incorrect'}`}>
        <i className={`fa ${correctness ? 'fa-check' : 'fa-times'}`}></i>
        You answered: {userResponse ? 'TRUE' : 'FALSE'}
      </div>
    </div>
  )
};

/**
 * @function QuestionResponseComponent
 * Shows ALL of the questions and user's responses. 
 * @param props
 * @returns JSX.Element
 */

interface QuestionResponseProps {
  quiz: Quiz
}

const QuestionResponseComponent: React.FC<QuestionResponseProps> = ({ quiz }) => {
  return (
    <div className="question-response-container">
      {quiz.questions.map((q: Question) => (
        <QuestionResponseRow
          key={q.id}
          question={q}
          correctness={q.userResponse === q.correctAnswer}
          userResponse={q.userResponse}
        />
      ))}
    </div>
  );
};

export default QuestionResponseComponent;