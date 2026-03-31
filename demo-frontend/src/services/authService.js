import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const registerUser = (data) => {
  return axios.post(`${API_URL}/register`, data);
};

export const loginUser = (email, password) => {
  return axios.post(`${API_URL}/login`, null, {
    params: { email, password }
  });
};