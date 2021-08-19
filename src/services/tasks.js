const token = localStorage.getItem("token");
const host = process.env.REACT_APP_API_HOST;

export const createTask = (task) => {
  return fetch(host + "/api/tasks", {
    method: "POST",
    mode: "cors",
    headers: {
      auth: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export const getAllTasks = (tokenn) => {
  return fetch(`${host}/api/tasks`, {
    method: "GET",
    mode: "cors",
    headers: {
      auth: tokenn,
    },
  });
};

export const removeTask = (_id) => {
  return fetch(host + "/api/tasks", {
    method: "DELETE",
    mode: "cors",
    headers: {
      auth: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id }),
  });
};
