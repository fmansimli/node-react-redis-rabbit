import Log from "../models/log";

export const createLog = async (log) => {
  return await Log.create(log);
};

export const deleteLog = async (_id) => {
  await Log.deleteOne({ _id });
};
