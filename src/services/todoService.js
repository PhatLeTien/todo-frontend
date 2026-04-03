import axios from "axios";

// const API = "http://localhost:5000/api/todos"; 

const API = import.meta.env.VITE_API_URL + "/api/todos";

export const getTodos = () => axios.get(API);
export const addTodo = (title) => axios.post(API, { title });
export const updateTodo = (id, completed) =>
  axios.put(`${API}/${id}`, { completed });
export const deleteTodo = (id) => axios.delete(`${API}/${id}`);