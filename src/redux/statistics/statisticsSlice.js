import { createSlice } from "@reduxjs/toolkit";
import { getStatistics } from "./statistics-operations";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    statistics: [],
  },

  extraReducers: (builder) =>
    builder.addCase(getStatistics.fulfilled, (state, { payload }) => {
      state.statistics = payload.data;
    }),
});

export default statisticsSlice.reducer;
