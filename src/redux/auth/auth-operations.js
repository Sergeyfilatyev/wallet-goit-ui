import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/api/auth";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      localStorage.setItem("token", "generated");
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
      localStorage.removeItem("token");
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async (token, { rejectWithValue }) => {
    try {
      const result = await api.verifyUser(token);
      localStorage.setItem("token", "generated");
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.checkAuth();
      localStorage.setItem("token", "generated");
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },

  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
