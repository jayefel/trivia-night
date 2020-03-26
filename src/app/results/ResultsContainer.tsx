import React, { ReactType } from 'react';
import { connect } from 'react-redux';
import { History } from 'history';
import { Quiz } from '../quiz/duck/types';
import { AppState } from '../../reducers';
import ResultsComponent from './ResultsComponent';

/**
 * HOC for checking to see if the user has completed the quiz
 * redirects the user to the home page if the quiz is incomplete
 * @function withRedirectIfQuizIncomplete
 * @param WrappedComponent - ReactType
 * @returns {React.Component} - HOC
 */
const withRedirectIfQuizIncomplete = (WrappedComponent: ReactType) => {
  return class extends React.Component<{ quiz: Quiz, history: History }> {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const { quiz } = this.props;

      if (!quiz.completed || !quiz.questions.length) {
        this.props.history.push('/');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapStateToProps = (state: AppState) => ({
  quiz: state.quiz
});

export default connect(mapStateToProps)(withRedirectIfQuizIncomplete(ResultsComponent));