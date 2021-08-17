import { ADD_ERROR, DELETE_ERROR } from "../actions/errors";
const initial = [];

const errorReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, action.error];
    case DELETE_ERROR:
      return state.filter((error) => error._id !== action._id);
    default:
      return state;
  }
};

export default errorReducer;
