import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import herosReducer from "./herosReducer";

export default combineReducers({
  characters: characterReducer,
  heros: herosReducer
});
