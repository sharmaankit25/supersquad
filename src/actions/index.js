import { ADD_CHARACTER, REMOVE_CHARACTER } from "./types";

export const addCharacterById = id => {
  return {
    type: ADD_CHARACTER,
    payload: id
  };
};

export const removeCharacterById = id => {
  return {
    type: REMOVE_CHARACTER,
    payload: id
  };
};
