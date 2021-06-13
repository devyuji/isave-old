import { createStore, combineReducers } from "redux";
import { POST_DATA, PROFILE_DATA, PREVLINK, ISMODALOPEN } from "./reducer";

const combineReducer = combineReducers({
  POST_DATA,
  PROFILE_DATA,
  PREVLINK,
  ISMODALOPEN,
});

export const store = createStore(combineReducer);
