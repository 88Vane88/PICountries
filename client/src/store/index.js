import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";
//import {composeWithDevTools} from "redux-devtools-extension"

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

/* 
const store=createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
)) */

export default store;
