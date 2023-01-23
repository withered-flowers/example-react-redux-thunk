import {
  COLOR_FETCHCOLOR_FAILURE,
  COLOR_FETCHCOLOR_PENDING,
  COLOR_FETCHCOLOR_SUCCESS,
} from "../actions/actionType";

const initialState = {
  error: "",
  isLoading: true,
  colors: [],
};

// Reducer always receive 2 args:
// state -> current state of the reducer
// action -> an object with type and payload
const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR_FETCHCOLOR_PENDING:
      return {
        error: "",
        isLoading: true,
        colors: [],
      };
    case COLOR_FETCHCOLOR_SUCCESS:
      return {
        error: "",
        isLoading: false,
        colors: action.payload,
      };
    case COLOR_FETCHCOLOR_FAILURE:
      return {
        error: action.payload,
        isLoading: false,
        colors: [],
      };
    default:
      return state;
  }
};

export default colorReducer;
