import socketio from "socket.io";
import { createTask, deleteTask, doneTask } from "../services/tasks";

import publishMail from "../redis/publishers/mailPublisher";

const runTaskSocket = (httpServer) => {
  const io = socketio(httpServer, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  const nsp = io.of("/task");

  nsp.on("connection", (socket) => {
    //console.log(`++ a user connected =>> (${socket.id})`);

    socket.on("new-task", async (data) => {
      try {
        const ctask = await createTask(data.task);

        publishMail({
          subject: "new task!!",
          display: "@" + data.username,
          text: `${data.task.title}\n${data.task.text}`,
        });

        nsp.emit("new-task1", ctask);
      } catch (error) {
        nsp.emit("new-task-e", error);
      }
    });

    socket.on("del-task", async (_id) => {
      try {
        await deleteTask(_id);
        nsp.emit("del-task1", _id);
      } catch (error) {
        nsp.emit("del-task-e", error);
      }
    });

    socket.on("done-task", async (_id) => {
      try {
        await doneTask(_id);
        nsp.emit("done-task1", _id);
      } catch (error) {
        nsp.emit("done-task-e", error);
      }
    });

    socket.on("disconnect", (data) => {
      //console.log(`-- a user disconnected.. =>>(${data})`);
    });
  });
};

export default runTaskSocket;
