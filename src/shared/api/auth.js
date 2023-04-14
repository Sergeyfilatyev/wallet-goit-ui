import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://localhost:3030/api" /* "https://wallet-api-goit.onrender.com/api" */,
  /* withCredentials: true, */
});

/* instance.interceptors.request.use() */

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = async (data) => {
  const { data: result } = await instance.post("/users/register", data);
  /* setToken(result.token); */
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post("/users/login", data);
  setToken(result.token);
  console.log("from auth", result.token);
  return result;
};

export const logout = async () => {
  const { data } = await instance.post("/users/logout");
  setToken();
  console.log(data);
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/users/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const verifyUser = async (token) => {
  try {
    const { data } = await instance.get(`/users/verify/${token}`);
    setToken(data.data.token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const checkAuth = async () => {
  try {
    const { data } = await instance.get("/users/refresh");
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default instance;
