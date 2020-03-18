import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './ResultsComponent.css';

const ResultsComponent = ({ quiz }) => {
  console.log('ResultsComponent quiz prop: ', quiz);
  const score = () => {
    return (
      <span>{quiz.score}/{quiz.questions.length}</span>
    )
  };

  const quizResponseDetails = useMemo(() => {
    if (!quiz.questions.length) {
      return <h1>Loading Results...</h1>;
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
        {score()}
      </h2>
      <div className="question-details-container">
        {quizResponseDetails}
      </div>
      <Link className="btn btn-lg btn-success" to='/'>PLAY AGAIN</Link>
    </div>
  )
};

const withRedirectIfQuizIncomplete = WrappedComponent => {
  class ComposedComponent extends React.Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.quiz.completed) {
        this.props.history.push('/');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return { quiz: state.quiz };
  };

  return connect(mapStateToProps)(ComposedComponent);
}

export default withRedirectIfQuizIncomplete(ResultsComponent);