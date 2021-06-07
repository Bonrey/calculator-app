import expressionReducer from "./expression";
import themesReducer from "./themes";
import { combineReducers } from "redux";

const indexReducer = combineReducers(expressionReducer, themesReducer);
