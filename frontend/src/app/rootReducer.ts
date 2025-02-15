import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "../features/users/userSlice";
import { authSlice } from "../features/auth/authSlice";

const rootReducer = combineReducers({
  [usersSlice.name]: usersSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export default rootReducer;
