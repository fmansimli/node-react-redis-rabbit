import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required().min(5),
  password: yup.string().required().min(6),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match!")
    .required(),
});

export const newTaskSchema = yup.object().shape({
  title: yup.string().required().min(3),
  text: yup.string().required().min(3),
});
