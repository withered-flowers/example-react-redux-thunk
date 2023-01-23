import {
  COLOR_FETCHCOLOR_FAILURE,
  COLOR_FETCHCOLOR_PENDING,
  COLOR_FETCHCOLOR_SUCCESS,
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

// We will make 3 (three) actionCreator here:
// When fetching is pending (fetchColorPending)
// When fetching is success (fetchColorSuccess)
// When fetching is failure (fetchColorFailure)

// Since this action will not be used outside this creator
// We won't export this three function
const fetchColorPending = () => ({
  type: COLOR_FETCHCOLOR_PENDING,
});

const fetchColorSuccess = (colors) => ({
  type: COLOR_FETCHCOLOR_SUCCESS,
  payload: colors,
});

const fetchColorFailure = (errorMessage) => ({
  type: COLOR_FETCHCOLOR_FAILURE,
  payload: errorMessage,
});

// We will use the Thunk (Middleware) here
// Wel will make a Function which will return function

// First (Outer) function will receive args (if needed)
// Second (Inner) function will receive "dispatch" and "getState" (optional)

// This first function will be wrapped by the Thunk (see store/index.js)
// Also called a HOF (Higher Order Function)
// HOF = a function that either returns a function or takes a function as one of its arguments

// This is called HOF because it returns a function
// see the return of this function
//    - return async (dispatch, getState) => { ... }
export const fetchColor = () => {
  // The function will return a function with 2 args (dispatch and getState)

  // This is also called HOF because it takes a function as one of its arguments
  // dispatch is a function
  // getState is also a function
  return async (dispatch, getState) => {
    // We will first dispatch the pending
    dispatch(fetchColorPending());

    // Let's check the state before fetching
    console.log("Before Fetching (pending)", getState());

    // Since this is already INSIDE the thunk
    // We can use impure function here
    const response = await fetch("https://reqres.in/api/colors");

    if (!response.ok) {
      const responseJson = await response.json();
      dispatch(fetchColorFailure(responseJson));

      // Let's try to use getState to read ALL STATE inside the redux
      console.log("After Fetching (error)", getState());
    }

    const responseJson = await response.json();
    dispatch(fetchColorSuccess(responseJson.data));

    // Let's try to use getState to read ALL STATE inside the redux
    console.log("After Fetching (success)", getState());
  };
};
