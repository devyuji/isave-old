import { createStore, combineReducers } from "redux";
import { POST_DATA, PROFILE_DATA, PREVLINK } from "./reducer";

const combineReducer = combineReducers({
  POST_DATA,
  PROFILE_DATA,
  PREVLINK,
});

export const store = createStore(
  combineReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
