import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCharacterById } from "../actions/index";
export class Characters extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(character => {
            return (
              <li className="list-group-item" key={character.id}>
                <div className="list-item">{character.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharacterById(character.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ characters }) => {
  return {
    characters
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ addCharacterById }, dispatch);
// };

export default connect(
  mapStateToProps,
  { addCharacterById }
)(Characters);
