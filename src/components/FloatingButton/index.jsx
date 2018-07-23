import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class FloatingButton extends Component {
  static propTypes = {
    count: PropTypes.number,
    onClick: PropTypes.func
  }
  static defaultProps = {
    count: 0
  }
  state = {
    count: this.props.count
  }

  handleClick = () => {
    this.setState(({count}) => ({
      count: count + 1,
      clicked: true
    }), this.props.onClick);
    setTimeout(() => {
      this.setState({
        clicked: false
      });
    }, 300);
  }

  render() {
    return (
      <div className="floating-button-comp">
        <div className="floating-button-wrapper">
          <a className={this.state.clicked ? "btn active" : "btn"}
            href="#0w0"
            onClick={this.handleClick}>
            <ion-icon name="heart"></ion-icon>
          </a>
        </div>
      </div>
    );
  }
}
