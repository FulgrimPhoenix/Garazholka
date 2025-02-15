import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  isAuthenticated: boolean;
  userId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IinitialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  userId: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;
