import React from 'react';

const QuestionResponseRow = ({ question, correct, userResponse }) => {
  return (
    <div className="question-row">
      <div className="question">
        {question.id + 1}. {question.question}
      </div>
      <div className={`user-response ${correct ? 'correct' : 'incorrect'}`}>
        <i className={`fa ${correct ? 'fa-check' : 'fa-times'}`}></i>
        You answered: {userResponse ? 'TRUE' : 'FALSE'}
      </div>
    </div>
  )
};

const QuestionResponseComponent = ({ quiz }) => {
  return quiz.questions.map(q => (
    <QuestionResponseRow
      key={q.id}
      question={q}
      correct={q.userResponse === q.correctAnswer}
      userResponse={q.userResponse}
    />
  ));
};

export default QuestionResponseComponent;