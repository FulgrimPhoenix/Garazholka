import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  isAuthenticated: boolean;
  accessToken: string | null;
  error: string | null;
}

const initialState: IinitialState = {
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated: !!localStorage.getItem("accessToken"),
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem("accessToken", action.payload);
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    logout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setAccessToken, logout, setAuthError } = authSlice.actions;
