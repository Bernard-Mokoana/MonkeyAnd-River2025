import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (user) => {
  try {
    const response = await axiosInstance.post("/users/login", user);
    console.log("✅ Login Successful:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message ||
        error.message ||
        "Login failed. Please try again."
    );
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users/register", userData);
    console.log("✅ Registration Successful:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again."
    );
  }
};
