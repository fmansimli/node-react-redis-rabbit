import { io } from "socket.io-client";

const host = process.env.REACT_APP_API_HOST;
let socket;

export const initTask = () => {
  socket = io(`${host}/task`);

  socket.on("connect", () => {
    console.log("*** connected to (task socket)");
  });

  socket.on("connect_error", (error) => {
    console.log(`$$ socket connection error => ((${error.message})`);
  });
};

export const newTask = (task) => {
  socket.emit("new-task", task);
};

export const subNewTask = (cb) => {
  socket.on("new-task1", (task) => {
    cb(task);
  });
};

export const delTask = (_id) => {
  socket.emit("del-task", _id);
};

export const subDelTasks = (cb) => {
  socket.on("del-task1", (_id) => {
    cb(_id);
  });
};

export const doneTask = (_id) => {
  socket.emit("done-task", _id);
};

export const subdoneTasks = (cb) => {
  socket.on("done-task1", (_id) => {
    cb(_id);
  });
};
