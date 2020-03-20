import React from 'react';
import { connect } from 'react-redux';
import ResultsComponent from './ResultsComponent';

const withRedirectIfQuizIncomplete = WrappedComponent => {
  return class extends React.Component {
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
}

const mapStateToProps = state => ({
  quiz: state.quiz
});

export default connect(mapStateToProps)(withRedirectIfQuizIncomplete(ResultsComponent));