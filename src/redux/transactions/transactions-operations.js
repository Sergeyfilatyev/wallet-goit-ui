import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/api/transactions";

export const fetchAllTransactions = createAsyncThunk(
  "transactions/getAllTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAllTransactions();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (data, { rejectWithValue }) => {
    try {
      const transaction = await api.addTransaction(data);
      return transaction;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.deleteTransaction(id);
      return {id, data};
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const data = await api.updateTransaction(id, updatedData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
