import { Schema, model } from "mongoose";

const logSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  severity: {
    type: String,
    default: "danger",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Log", logSchema);
