import { submitAnswer } from './duck/actions';
import { Quiz } from './duck/types';
import { connect } from 'react-redux';
import { AppState } from './../../reducers';
import QuizComponent from "./QuizComponent";
import operations from './duck/operations';

export interface StateProps {
  quiz: Quiz;
}

export interface DispatchProps {
  fetchQuiz: Function;
  submitAnswer: typeof submitAnswer;
}

const mapStateToProps = (state: AppState) => ({
  quiz: state.quiz
});

const mapDispatchToProps: DispatchProps = {
  fetchQuiz: operations.fetchQuiz,
  submitAnswer: operations.submitAnswer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizComponent);