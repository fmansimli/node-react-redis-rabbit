import { model, Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  done: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Task", taskSchema);
