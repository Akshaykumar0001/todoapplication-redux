import { combineReducers } from "@reduxjs/toolkit";
import { addTodoReducer } from "./Reducer";
import ChangeTheNumber from "./IncDec";
import authReducer from "../redux/SigninReducer";
const rootreducer = combineReducers({
  addTodoReducer,
  ChangeTheNumber,
  user: authReducer,
});
export default rootreducer;
