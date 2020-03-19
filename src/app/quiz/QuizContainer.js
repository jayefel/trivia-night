import { connect } from 'react-redux';
import { submitAnswer } from './duck/actions';
import { fetchQuestions } from './duck/operations';
import QuizComponent from "./QuizComponent";

const mapStateToProps = (state) => {
  return { quiz: state.quiz };
};

const mapDispatchToProps = {
  fetchQuestions,
  submitAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);