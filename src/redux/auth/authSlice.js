import {
  register,
  login,
  logout,
  refresh,
  verifyUser,
} from "./auth-operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  isLoading: false,
  error: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      /*       .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
 */
      .addCase(verifyUser.fulfilled, (state, { payload }) => {
        state.user = payload.name;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = "";
        state.user = {};
        state.isAuth = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.token = payload.token;
      })

      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          refresh.fulfilled,
          verifyUser.fulfilled
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
          verifyUser.pending
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
          verifyUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default authSlice.reducer;
