import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/api/statistics";

export const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async ({ year, selectedMonth }, { rejectWithValue }) => {
    try {
      const data = await api.fetchStatistics(year, selectedMonth);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
