import { register, login, logout } from "./auth-operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "", email: "" },
  token: null,
  isLoading: false,

  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        // state.token = accessToken;
        state.isAuth = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.isLoading = false;

        state.user = user;
        state.token = token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;

        state.token = null;
        state.user = { name: "", email: "" };
      })

      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        (state, { payload }) => {
          state.isLoading = false;
        }
      ),
});

export default authSlice.reducer;
