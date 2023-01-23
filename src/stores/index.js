// Using the legacy way (non redux-toolkit)
// Need to import the legacy_createStore
// (normal "createStore" is already deprecated)
import { legacy_createStore as createStore } from "redux";

// since we will use thunk, we need to import applyMiddleware from redux
import { applyMiddleware } from "redux";
// and we need to import thunk from redux-thunk
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

// We will use the middleware thunk inside the createStore
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
