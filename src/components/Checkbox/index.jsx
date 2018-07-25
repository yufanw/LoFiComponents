import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox-comp">
        <div className="checkbox-wrapper">
          <label className="container">
            <input type="radio" value="github" name="radio"/>
            <span className="checkmark red">
            </span>
          </label>
          <label className="container">
            <input type="radio" name="radio"/>
            <span className="checkmark yellow">
            </span>
          </label>
          <label className="container">
            <input type="radio" name="radio"/>
            <span className="checkmark green">
            </span>
          </label>
        </div>
      </div>
    );
  }
}
