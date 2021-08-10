import { createStore, combineReducers } from "redux";

//import reducers
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({ auth: authReducer });

export default function newStore() {
  const store = createStore(rootReducer);
  return store;
}
