import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserData } from "~types/user.types";

export const fetchUsersMe = createAsyncThunk("usrs/me", async (): Promise<IUserData> => {
  const user = await api.
  return
})