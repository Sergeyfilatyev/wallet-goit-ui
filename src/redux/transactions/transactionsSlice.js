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
    balance: 0,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllTransactions.fulfilled, (state, { payload }) => {
        state.transItems = payload.data;
        state.balance = payload.balance;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transItems = [...state.transItems, payload.data];
        state.balance = payload.balance;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {

        state.transItems = state.transItems.filter(({ _id }) => _id !== payload.id);
        state.balance = payload.data.balance;
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        const index = state.transItems.findIndex(
          (el) => el._id === payload.data._id
        );
        const updatedTransaction = payload.data;
        state.transItems[index] = {
          ...state.transItems[index],
          ...updatedTransaction,
        };
        state.balance = payload.balance;
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
