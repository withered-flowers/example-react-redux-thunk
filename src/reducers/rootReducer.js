// We will use more than 1 reducer here
// So we need to combine all the reducer into 1 reducer by using combineReducer from redux
import { combineReducers } from "redux";

// Import all of the reducer here
import counterReducer from "./counterReducer";
import colorReducer from "./colorReducer";

const rootReducer = combineReducers({
  // We will use the alias for each of the reducer here
  // counter -> counterReducer
  // color -> colorReducer
  counter: counterReducer,
  color: colorReducer,
});

export default rootReducer;
