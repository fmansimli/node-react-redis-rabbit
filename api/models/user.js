import { model, Schema } from "mongoose";
import { hashSync } from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    //unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    //unique: true,
  },
  password: {
    type: String,
    set: (value) => hashSync(value, 10),
  },
  name: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  roles: {
    type: Array,
    default: ["user"],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: Date,
});

export default model("User", userSchema);
