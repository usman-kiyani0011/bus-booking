import { useReducer } from "react";

const intialStates = {
  value: "",
  isTouched: false,
};
const inputReducerFunction = (inputState, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: inputState.isTouched };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: inputState.value,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
};

const useReducerHook = (validateInputs) => {
  const [inputStates, dispatch] = useReducer(
    inputReducerFunction,
    intialStates
  );
  const isValid = validateInputs(inputStates.value);
  const hasError = !isValid && inputStates.isTouched;

  const changeInputHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };
  const blurInputHandler = (event) => {
    dispatch({ type: "BLUR" });
  };
  const reset = (event) => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputStates.value,
    isValid: isValid,
    hasError,
    changeInputHandler,
    blurInputHandler,
    reset,
  };
};
export default useReducerHook;
