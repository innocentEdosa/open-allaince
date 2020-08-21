import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import thematic from './thematicStore/reducer';
import commitment from './commitments/reducer';
import blog from './Blog/reducer';

const rootReducer = combineReducers({
  thematic,
  commitment,
  blog,
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
