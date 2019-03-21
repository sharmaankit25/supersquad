import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/types";
import { createCharacter } from "./helpers";
function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return state.filter(item => item.id !== action.payload);
    case REMOVE_CHARACTER:
      return [...state, createCharacter(action.payload)];
    default:
      return state;
  }
}

export default characters;
