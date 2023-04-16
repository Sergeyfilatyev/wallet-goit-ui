import authReducer from "./auth/authSlice";
import transactionsReducer from "./transactions/transactionsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import statisticsReducer from "./statistics/statisticsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    transactions: transactionsReducer,
    statistics: statisticsReducer,
  },
});
