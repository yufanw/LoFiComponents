import React, { Component } from 'react';

import './index.css';

export default class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox-comp">
        <div className="checkbox-wrapper">
          <label className="container">
            <span className="half-circle"></span>
            <input type="radio" name="radio"/>
            <span className="checkmark red"></span>
          </label>
          <label className="container">
            <span className="half-circle"></span>
            <input type="radio" name="radio"/>
            <span className="checkmark yellow"></span>
          </label>
          <label className="container">
            <span className="half-circle"></span>
            <input type="radio" name="radio"/>
            <span className="checkmark green"></span>
          </label>
        </div>
      </div>
    );
  }
}
