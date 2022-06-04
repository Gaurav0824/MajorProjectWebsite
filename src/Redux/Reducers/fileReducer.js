import * as ActionTypes from '../Constants/Constants.js';

const INITIAL_STATE = {
  file: null,
  error: '',
};

export const fileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FILE:
      const item = action.payload;
      return { ...state, file: item };
    case ActionTypes.SET_FILE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
