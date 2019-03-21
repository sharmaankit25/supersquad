import React, { Component } from "react";
import { connect } from "react-redux";

class SquadStatus extends Component {
  strength = () => {
    let strength = 0;
    this.props.heros.forEach(hero => {
      strength += hero.strength;
    });
    return strength;
  };
  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            Overall Strength : {this.strength()}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ heros }) => {
  return {
    heros
  };
};

export default connect(
  mapStateToProps,
  null
)(SquadStatus);
