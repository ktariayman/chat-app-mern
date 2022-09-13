import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from 'redux';

import authReducer from "./reducer/authReducer";
import friendsReducer from "./reducer/friendsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  friends: friendsReducer,

});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
