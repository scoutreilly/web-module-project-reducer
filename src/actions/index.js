export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const ADD_MEMORY = "ADD_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperator = (symbol) => {
  return { type: CHANGE_OPERATION, payload: symbol };
};

export const clearTotal = () => {
  return { type: CLEAR_DISPLAY };
};

export const applyMemory = (number) => {
  return { type: APPLY_MEMORY, payload: number };
};

export const addMemory = (number) => {
  return { type: ADD_MEMORY, payload: number };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};
