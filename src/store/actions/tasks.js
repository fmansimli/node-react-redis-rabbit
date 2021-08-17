export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_TASKS = "SET_TASKS";
export const DONE_TASK = "DONE_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  task,
});

export const deleteTask = (_id) => ({
  type: DELETE_TASK,
  _id,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks,
});

export const doneTask = (_id) => ({
  type: DONE_TASK,
  _id,
});
