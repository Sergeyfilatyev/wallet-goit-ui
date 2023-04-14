import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/api/transactions');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/transactions`, user);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
   
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({id, type, category, comment , amount}, { rejectWithValue }) => {

    try {
      const {data} = await axios.patch(`/api/transactions/${id}`, { type, category, comment , amount});
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);