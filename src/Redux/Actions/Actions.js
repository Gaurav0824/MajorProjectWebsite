import * as ActionTypes from '../Constants/Constants.js';

//DATA
export const setData = (data) => {
  return {
    type: ActionTypes.ADD_DATA,
    payload: data,
  };
};

//FILE
export const setFile = (file) => {
  return {
    type: ActionTypes.ADD_FILE,
    payload: file,
  };
};

export const setError = (error) => {
  return {
    type: ActionTypes.SET_FILE_ERROR,
    payload: error,
  };
};

//HEADING
export const setHeadings = (headings) => {
  return {
    type: ActionTypes.ADD_HEADINGS,
    payload: headings,
  };
};

//RESULT
export const setResults = (result) => {
  return {
    type: ActionTypes.ADD_RESULTS,
    payload: result,
  };
};
