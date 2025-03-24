import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUserMe,
  fetchUsersMe,
  patchUsersMe,
  signUp,
} from "./usersThunks";
import { IUserData } from "../../types";
import { TuserStatus } from "../../types/user.types";

interface IinitialState {
  user: null | IUserData;
  status: TuserStatus;
  error: null | string;
}

const initialState: IinitialState = {
  user: null,
  status: "idle", // 'idle' | 'fetching' | 'fetched' | 'failed'
  error: null,
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: { resetState: () => initialState },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsersMe.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(fetchUsersMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUsersMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Undefinded error";
      })
      .addCase(patchUsersMe.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(patchUsersMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(patchUsersMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Undefinded error";
      })
      .addCase(deleteUserMe.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(deleteUserMe.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
      })
      .addCase(deleteUserMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Undefinded error";
      })
      .addCase(signUp.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Undefinded error";
      }),
});
