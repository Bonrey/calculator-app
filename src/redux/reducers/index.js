import expressionReducer from "./expression";
import themesReducer from "./themes";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  expression: expressionReducer,
  theme: themesReducer
});

export default allReducer;