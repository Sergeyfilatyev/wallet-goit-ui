import { register, login, logout, refresh, verify } from "./auth-operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  user: {},
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
        state.isAuth = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = { name: payload.data.name, email: payload.data.email };
        state.isAuth = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {};
        state.isAuth = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.user = { name: payload.data.name, email: payload.data.email };
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
          verify.pending
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
          verify.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default authSlice.reducer;
