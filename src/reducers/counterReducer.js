import {
  COUNTER_FIRSTNUMBER_DECREMENT,
  COUNTER_FIRSTNUMBER_INCREMENT,
  COUNTER_RESETNUMBER,
  COUNTER_SECONDNUMBER_DECREMENT,
  COUNTER_SECONDNUMBER_INCREMENT,
} from "../actions/actionType";

const initialState = {
  firstCounter: 10,
  secondCounter: 50,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_FIRSTNUMBER_INCREMENT:
      return {
        ...state,
        firstCounter: state.firstCounter + action.payload,
      };
    case COUNTER_FIRSTNUMBER_DECREMENT:
      return {
        ...state,
        firstCounter: state.firstCounter - action.payload,
      };
    case COUNTER_SECONDNUMBER_INCREMENT:
      return {
        ...state,
        secondCounter: state.secondCounter + action.payload,
      };
    case COUNTER_SECONDNUMBER_DECREMENT:
      return {
        ...state,
        secondCounter: state.secondCounter - action.payload,
      };
    case COUNTER_RESETNUMBER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default counterReducer;
