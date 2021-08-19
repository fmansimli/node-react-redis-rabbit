import React, { useEffect, useState } from "react";
import styles from "./TaskPage.module.scss";

import TaskList from "../components/task/TaskList";
import TaskForm from "../components/task/TaskForm";
import Errors from "../components/error/Errors";
import GifLoading from "../components/common/GifLoading";

import {
  addTask,
  setTasks,
  deleteTask,
  doneTask,
} from "../store/actions/tasks";

import { addError } from "../store/actions/errors";
import { useDispatch, useSelector } from "react-redux";

import {
  initTask,
  newTask,
  subNewTask,
  subDelTasks,
  subdoneTasks,
} from "../sockets/taskSocket";

import { getAllTasks } from "../services/tasks";

export default function TaskPage() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.done === false)
  );
  const doneTasks = useSelector((state) =>
    state.tasks.filter((task) => task.done === true)
  );
  const errors = useSelector((state) =>
    state.errors.filter((error) => error.label === "tasks")
  );
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    initTask();

    subNewTask((task) => {
      dispatch(addTask(task));
    });

    subDelTasks((_id) => {
      dispatch(deleteTask(_id));
    });

    subdoneTasks((_id) => {
      dispatch(doneTask(_id));
    });

    (async () => {
      try {
        const tasks = await (
          await getAllTasks(localStorage.getItem("token"))
        ).json();
        dispatch(setTasks(tasks));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        dispatch(addError({ ...error, _id: Date.now, label: "tasks" }));
      }
    })();
  }, []);

  const sendTask = async (task) => {
    newTask({ task: { ...task, userId: user._id }, username: user.username });
  };

  return loading ? (
    <GifLoading />
  ) : (
    <>
      <div className={styles.screen}>
        <Errors errors={errors} />
        <div className={styles.page}>
          <div className={styles.child} style={{ width: "20%" }}>
            <TaskForm sendTask={sendTask} />
          </div>
          <div className={styles.child} style={{ flex: 1 }}>
            <div className={styles.task}>
              <TaskList tasks={tasks} noMessage="there is no tasks.." />
            </div>
            <div className={styles.right}>
              <TaskList
                tasks={doneTasks}
                noMessage="there is no completed task.."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
