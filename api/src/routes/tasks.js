import { Router } from "express";
import {
  deleteTask,
  editTask,
  createTask,
  getTaskById,
  getAllTask,
} from "../services/tasks";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await getAllTask();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const task = await getTaskById(req.params.id);
    if (!task) {
      return next();
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { title, text, done } = req.body;
  try {
    const task = await createTask({ title, text, done });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  const { title, text, done, _id } = req.body;
  try {
    const updated = await editTask(_id, { title, text, done, _id });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  const _id = req.body._id;
  try {
    await deleteTask(_id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export default router;
