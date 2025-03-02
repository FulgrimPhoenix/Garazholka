import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { authSlice } from "~features/auth/authSlice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [authSlice.name]: authSlice.reducer,
});

export default rootReducer;
