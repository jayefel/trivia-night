import { connect } from 'react-redux';
import QuizComponent from "./QuizComponent";
import operations from './duck/operations';

const mapStateToProps = (state) => {
  return { quiz: state.quiz };
};

const mapDispatchToProps = {
  fetchQuiz: operations.fetchQuiz,
  submitAnswer: operations.submitAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);