import React, { Component } from "react";
import "./App.css";
import FloatingButton from "./components/FloatingButton";
import ScoreBox from "./components/ScoreBox";
import Switch from "./components/Switch";

class App extends Component {
  state = {
    floatingbutton: 0,
    toggle: false
  }

  handleFloatingButtonClick = () => {
    this.setState(({floatingbutton}) => ({
      floatingbutton: floatingbutton + 1
    }));
  }

  handleToggle = () => {
    this.setState(({toggle}) => ({
      toggle: !toggle
    }));
  }

  toggleIcon = () => {
    if (this.state.toggle) {
      return (
        <div className="shift">
          <ion-icon name="moon"></ion-icon>
        </div>
      );
    }
    return (
      <div className="shift">
        <ion-icon name="sunny"></ion-icon>
      </div>
    );
  }

  render() {
    return ( 
      <div className={this.state.toggle ? "App dark" : "App"}>
        <h1>LoFi Components</h1>
        <div className="app-wrapper">

          <div className="comp">
            <ScoreBox
              icon={<ion-icon name="heart"></ion-icon>}
              score={this.state.floatingbutton}
            />
            <FloatingButton 
              count={this.state.floatingbutton}
              onClick={this.handleFloatingButtonClick}
            />
          </div>

          <div className="comp">
            <ScoreBox 
              icon={this.toggleIcon()}
            />
            <Switch 
              on={this.state.toggle}
              toggle={this.handleToggle}
            />
          </div>

          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
        </div>
        <footer>
          <h3><a href="https://github.com/yufanw"> Yufan Wang</a></h3>
          <h5>v0.1.4</h5>
          <a href="https://github.com/yufanw/LoFiComponents"> Source Code</a>
          <a href="mailto:yufansmail@gmail.com"> Contact</a>
        </footer>
      </div>
    );
  }
}

export default App;
