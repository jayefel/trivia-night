import React from 'react';
import { Link } from 'react-router-dom';
import './HomeComponent.css';

const HomeComponent = () => {
  return (
    <div className="intro-container">
      <h2 className="heading">Welcome to Trivia Night!</h2>
      <h5 className="introduction">You will be presented with 10 True or False questions.</h5>
      <h5 className="question">Can you score 100%?</h5>
      <Link id="start-btn" className="btn btn-lg btn-success" to="/quiz">
        <i className="fa fa-play-circle"></i> BEGIN
      </Link>
    </div>
  )
};

export default HomeComponent;