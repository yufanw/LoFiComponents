import React, { Component } from "react";
import "./App.css";
import FloatingButton from "./components/FloatingButton";
import ScoreBox from "./components/ScoreBox";
import Switch from "./components/Switch";
import Checkbox from "./components/Checkbox";

class App extends Component {
  state = {
    floatingbutton: 0,
    toggle: false,
    rainbowClass: ""
  }

  handleFloatingButtonClick = () => {
    this.setState(({floatingbutton}) => ({
      floatingbutton: floatingbutton + 1,
      rainbowClass: `rainbow${String(String(floatingbutton + 1)[String(floatingbutton + 1).length - 1])}`
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
          <i className="icon ion-ios-moon"></i>
        </div>
      );
    }
    return (
      <div className="shift">
        <i className="icon ion-ios-sunny"></i>
      </div>
    );
  }

  render() {
    return ( 
      <div className={this.state.toggle ? "App dark" : "App"}>
        <h1>LoFi Components</h1>
        <div className="app-wrapper">

          <div className="comp">
            <div className={this.state.rainbowClass}>
              <ScoreBox
                icon={<i className="icon ion-ios-heart"></i>}
                score={this.state.floatingbutton}
              />
            </div>
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

          <div className="comp">
            <ScoreBox
              score={"BETA"}
            />
            {/* <Checkbox /> */}
          </div>

          <div className="comp">
            COMING SOON
            <a href="https://github.com/yufanw/LoFiComponents">
              Follow Work on Github
              <i className="icon ion-logo-github github"></i>
            </a>
          </div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
          <div className="comp">COMING SOON</div>
        </div>
        <footer>
          <h3><a href="https://github.com/yufanw">Yufan Wang</a></h3>
          <h5>v0.2.1</h5>
          <a href="https://github.com/yufanw/LoFiComponents">Source Code</a>
          <a href="mailto:yufansmail@gmail.com">Contact</a>
        </footer>
      </div>
    );
  }
}

export default App;
