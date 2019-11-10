import { combineReducers } from "redux";
import success from "./successReducer";
import gessedWords from "./guessWordsReducer";

export default combineReducers({
  success,
  gessedWords
});
