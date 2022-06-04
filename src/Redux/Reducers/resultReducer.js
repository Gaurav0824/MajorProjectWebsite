import * as ActionTypes from '../Constants/Constants.js';

const INITIAL_STATE = {
  result: [],
};

export const resultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_RESULTS:
      return { ...state, result: action.payload };
    default:
      return state;
  }
};
