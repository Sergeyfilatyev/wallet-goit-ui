import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getStatistics } from "./statistics-operations";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    statistics: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder.addCase(getStatistics.fulfilled, (state, { payload }) => {
      state.statistics = payload.data;
    })
    .addCase(getStatistics.pending, state => {
      state.isLoading = true;
    })
    .addCase(getStatistics.rejected, (state, {payload}) => {
      state.error = payload;
    })

    .addMatcher(
      isAnyOf(
        getStatistics.fulfilled,
        getStatistics.rejected,
      ),
      (state) => {
        state.isLoading = false;
      }
    )
});

export default statisticsSlice.reducer;
