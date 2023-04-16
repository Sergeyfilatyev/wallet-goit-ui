import { createSlice } from "@reduxjs/toolkit";
import { fetchStatistics } from "./statistics-operations";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    statistics: [],
  },

  extraReducers: (builder) =>
    builder.addCase(fetchStatistics.fulfilled, (state, { payload }) => {
      state.statistics = payload.data;
    }),
});

export default statisticsSlice.reducer;
