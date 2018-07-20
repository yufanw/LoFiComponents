import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ScoreBox = ({icon, score}) => {
  return (
    <div className="scorebox-comp">
      <div className="scorebox-wrapper">
        <div className="icon">
          {icon}
        </div>
        <div className="score">
          {score}
        </div>
      </div>
    </div>
  );
};

ScoreBox.propTypes = {
  icon: PropTypes.element,
  score: PropTypes.any
};

export default ScoreBox;