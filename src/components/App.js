import React, { Component } from "react";
import Characters from "./Characters";
import Heros from "./Heros";
import SquadStatus from "./SquadStatus";
import "../styles/index.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Supersquad</h3>
        <div className="columns">
          <div className="column">
            <Characters />
          </div>
          <div className="column">
            <Heros />
          </div>
          <div className="column">
            <SquadStatus />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
