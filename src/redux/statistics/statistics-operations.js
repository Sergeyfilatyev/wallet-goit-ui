import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/api/statistics";

export const fetchStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.fetchStatistics();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
