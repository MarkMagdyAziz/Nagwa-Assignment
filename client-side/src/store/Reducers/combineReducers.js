import { combineReducers } from "redux";

import wordsReducer from "./words";
import studentScore from "./score";

// combination of reducers
export default combineReducers({
  wordsReducer,
  studentScore,
});
