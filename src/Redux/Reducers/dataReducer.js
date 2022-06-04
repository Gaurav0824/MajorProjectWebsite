import * as ActionTypes from '../Constants/Constants.js';

const INITIAL_STATE = {
  data: [],
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
