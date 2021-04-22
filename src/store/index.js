import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import MovieReducer from "./reducers/MovieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const root = combineReducers({
  MovieReducer,
});
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
