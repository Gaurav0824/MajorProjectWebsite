import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { dataReducer } from './Reducers/dataReducer';
import { fileReducer } from './Reducers/fileReducer';
import { headingsReducer } from './Reducers/headingsReducer';
import { resultReducer } from './Reducers/resultReducer';

//REDUCERS
const reducer = combineReducers({
  file: fileReducer,
  data: dataReducer,
  headings: headingsReducer,
  result: resultReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
