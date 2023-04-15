import {
  register,
  login,
  logout,
  current,
  refresh,
  verify,
} from "./auth-operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  balance: 0,
  isLoading: false,
  error: null,
  isAuth: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.data;
      })

      .addCase(verify.fulfilled, (state, { payload }) => {
        state.user = { name: payload.data.name, email: payload.data.email };
        state.token = payload.data.token;
        state.isAuth = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = { name: payload.data.name, email: payload.data.email };
        state.token = payload.data.token;
        state.isAuth = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = "";
        state.user = {};
        state.isAuth = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        /* state.token = payload.data.token; */
        state.user = { name: payload.data.name, email: payload.data.email };
      })

      .addCase(current.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.error = null;
        state.isRefreshing = false;
      })

      .addCase(current.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          refresh.fulfilled,
          verify.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          refresh.pending,
          verify.pending,
          current.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          refresh.rejected,
          verify.rejected,
          current.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default authSlice.reducer;
