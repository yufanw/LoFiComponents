import React, { Component } from 'react';

import './index.css';

export default class Switch extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState(({on}) => ({
      on: !on
    }));
  }

  render() {
    return (
      <div className="switch-comp">
        <div className="switch-wrapper">
          <label className={this.state.on ? "switch" : "switch off"} htmlFor="switch">
            <input type="checkbox" 
              name="switch" 
              id="switch" 
              onChange={this.toggle}
              checked={this.state.on}/>
            <div className={this.state.on ? "slider" : "slider off"}></div>
          </label>
        </div>
      </div>
    );
  }
}
