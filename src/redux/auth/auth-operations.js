import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = "https://wallet-api-goit.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/users/register", userData);

      // token.set(res.token);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data, token } = await axios.post("/api/users/login", userData);

      token.set(token);
      console.log(data, token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/api/users/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
