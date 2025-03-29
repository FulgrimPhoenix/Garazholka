import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { authSlice } from "../features/auth/authSlice";
import { userApi } from "./api/userApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [authSlice.name]: authSlice.reducer,
});

export default rootReducer;
