import {  createSlice } from "@reduxjs/toolkit";
import { fetchUsersMe } from "./usersThunks";
import { TuserStatus, IUserData } from "~types/user.types";

interface IinitialState {
  user: null | IUserData[];
  status: TuserStatus;
  error: null | string;
}

const initialState: IinitialState = {
  user: null,
  status: 'idle', // 'idle' | 'fetching' | 'fetched' | 'failed'
  error: null,
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {resetState: () => initialState},
  extraReducers: builder => {
    builder.addCase(fetchUsersMe.pending, state => {
      state.status = 'fetching';
    })
    .addCase(fetchUsersMe.fulfilled, (state, action) => {
      state.status = "fetched"
      state.user = action.payload
    })
  }

})