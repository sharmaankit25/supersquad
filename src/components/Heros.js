import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "../actions/index";
class Heros extends Component {
  render() {
    return (
      <div>
        <h4>Your Heros :</h4>
        <ul className="list-group">
          {this.props.heros.map(hero => {
            return (
              <li className="list-group-item" key={hero.id}>
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharacterById(hero.id)}
                >
                  x
                </div>
              </li>
            );
          })}
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
  { removeCharacterById }
)(Heros);
