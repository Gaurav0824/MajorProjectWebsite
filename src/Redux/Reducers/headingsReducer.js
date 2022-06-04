import * as ActionTypes from '../Constants/Constants.js';

const INITIAL_STATE = {
  headings: [],
};

export const headingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_HEADINGS:
      return { ...state, headings: action.payload };
    default:
      return state;
  }
};
