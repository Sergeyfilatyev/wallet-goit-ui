import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = async (data) => {
  const { data: result } = await instance.post("/users/register", data);
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post("/users/login", data);
  setToken(result.token);
  console.log("from auth", result.token);
  return result;
};

export const logout = async () => {
  await instance.post("/users/logout");
  setToken();
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
    setToken(data.data.token);
    console.log(data.data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// instance.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     console.log(error);
//     if (
//       error.response.status == 401 &&
//       error.config &&
//       !originalRequest._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const { data } = await instance.get("/users/refresh");
//         console.log(data.data.token);
//         error.config.headers["Authorization"] = `Bearer ${data.data.token}`;
//         localStorage.setItem("token", "generated");
//         return instance.request(originalRequest);
//       } catch (error) {
//         throw error;
//       }
//     }
//     throw error;
//   }
// );

export default instance;
