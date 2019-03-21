import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { addCharacterById } from "./actions";
const store = createStore(rootReducer);
store.subscribe(() => console.log("Store", store.getState()));
store.dispatch(addCharacterById(2));
export default store;
