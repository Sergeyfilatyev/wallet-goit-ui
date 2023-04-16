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
      await api.deleteTransaction(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.updateTransaction(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
