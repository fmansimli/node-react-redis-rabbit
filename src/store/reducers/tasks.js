import { ADD_TASK, SET_TASKS, DELETE_TASK, DONE_TASK } from "../actions/tasks";
const initial = [];

const taskReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    case SET_TASKS:
      return action.tasks;
    case DELETE_TASK:
      return state.filter((task) => task._id !== action._id);
    case DONE_TASK:
      return state.map((task) => {
        if (task._id === action._id) {
          return { ...task, done: true };
        }
        return task;
      });
    default:
      return state;
  }
};

export default taskReducer;
