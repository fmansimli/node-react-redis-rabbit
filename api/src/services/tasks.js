import Task from "../models/task";

export const deleteTask = async (_id) => {
  await Task.deleteOne({ _id });
};

export const editTask = async (_id, newTask) => {
  return await Task.findOneAndUpdate({ _id }, newTask, { new: true });
};

export const createTask = async (task) => {
  return await Task.create(task);
};

export const getTaskById = async (_id) => {
  return await Task.findById(_id);
};

export const getAllTask = async () => {
  return await Task.find();
};

export const doneTask = async (_id) => {
  await Task.updateOne({ _id }, { done: true });
};
