import { createStore, combineReducers } from "redux";

//import reducers
import authReducer from "./reducers/auth";
import taskReducer from "./reducers/tasks";
import errorReducer from "./reducers/errors";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  errors: errorReducer,
});

export default function newStore() {
  const store = createStore(rootReducer);
  return store;
}
