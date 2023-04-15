import {
  fetchAllTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from "./transactions-operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder

      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.transItems = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transItems = [...state.transItems, action.payload];
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transItems = state.transItems.filter(({ id }) => id !== payload);
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        const index = state.transItems.findIndex(
          (contact) => contact.id === payload.id
        );
        state.transItems[index] = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchAllTransactions.pending,
          addTransaction.pending,
          deleteTransaction.pending,
          updateTransaction.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllTransactions.fulfilled,
          addTransaction.fulfilled,
          deleteTransaction.fulfilled,
          updateTransaction.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllTransactions.rejected,
          addTransaction.rejected,
          deleteTransaction.rejected,
          updateTransaction.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default transactionsSlice.reducer;
