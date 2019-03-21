import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/types";
import { createCharacter } from "./helpers";

function heros(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, createCharacter(action.payload)];
    case REMOVE_CHARACTER:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export default heros;
