export const ADD_ERROR = "ADD_ERROR";
export const DELETE_ERROR = "DELETE_ERROR";

export const addError = (error) => ({
  type: ADD_ERROR,
  error,
});

export const delError = (_id) => ({
  type: DELETE_ERROR,
  _id,
});
