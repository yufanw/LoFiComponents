import React, { Component } from "react";
import "./App.css";
import FloatingButton from "./components/FloatingButton";
import ScoreBox from "./components/ScoreBox";
import Switch from "./components/Switch";

class App extends Component {
  state = {
    floatingbutton: 0
  }

  handleFloatingButtonClick = () => {
    this.setState(({floatingbutton}) => ({
      floatingbutton: floatingbutton + 1
    }));
  }

  render() {
    return ( 
      <div className="App">
        <h1>LoFi Components</h1>
        <div className="app-wrapper">

          <div className="comp">
            <ScoreBox
              icon={<ion-icon name="heart"></ion-icon>}
              score={this.state.floatingbutton}
            />
            <FloatingButton 
              onClick={this.handleFloatingButtonClick}
            />
          </div>

          <div className="comp">
            <Switch />
          </div>

          <div className="comp"></div>
          <div className="comp"></div>
          <div className="comp"></div>
          <div className="comp"></div>
          <div className="comp"></div>
        </div>
      </div>
    );
  }
}

export default App;
