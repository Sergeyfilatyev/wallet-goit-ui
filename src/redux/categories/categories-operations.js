import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/api/categories";

export const fetchAllCategories = createAsyncThunk(
    "categories/getAllCategories",
    async (_, { rejectWithValue }) => {
      try {
        const data = await api.fetchCategories();
        return data;
      } catch ({ response }) {
        return rejectWithValue(response);
      }
    }
  );