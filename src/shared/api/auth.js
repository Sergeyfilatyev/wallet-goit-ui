import axios from "axios";

const instance = axios.create({
  baseURL: "https://wallet-api-goit.onrender.com/api",
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = async (data) => {
  const { data: result, status } = await instance.post("/users/register", data);
  setToken(result.token);
  return { result, status };
};

export const login = async (data) => {
  const { data: result, status } = await instance.post("/users/login", data);
  setToken(result.token);
  return { result, status };
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

export default instance;
