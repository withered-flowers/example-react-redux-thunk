import {
  COUNTER_FIRSTNUMBER_DECREMENT,
  COUNTER_FIRSTNUMBER_INCREMENT,
  COUNTER_RESETNUMBER,
  COUNTER_SECONDNUMBER_DECREMENT,
  COUNTER_SECONDNUMBER_INCREMENT,
} from "./actionType";

// counterReducer
export const counterFirstNumberIncrement = (amount) => ({
  type: COUNTER_FIRSTNUMBER_INCREMENT,
  payload: amount,
});

export const counterFirstNumberDecrement = (amount) => ({
  type: COUNTER_FIRSTNUMBER_DECREMENT,
  payload: amount,
});

export const counterSecondNumberIncrement = (amount) => ({
  type: COUNTER_SECONDNUMBER_INCREMENT,
  payload: amount,
});

export const counterSecondNumberDecrement = (amount) => ({
  type: COUNTER_SECONDNUMBER_DECREMENT,
  payload: amount,
});

export const counterResetNumber = () => ({
  type: COUNTER_RESETNUMBER,
});
