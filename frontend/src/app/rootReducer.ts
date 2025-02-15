import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "../features/users/userSlice";

const rootReducer = combineReducers({
  [usersSlice.name]: usersSlice.reducer,
});

export default rootReducer;
