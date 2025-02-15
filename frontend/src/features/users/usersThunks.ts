import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserData } from "../../types/user.types";
import { api, IUserAuth } from "../../utils/MainApi";

export const fetchUsersMe = createAsyncThunk(
  "users/me",
  async (): Promise<IUserData> => {
    const response = await api.getUsersMe();
    return response;
  }
);

export const patchUsersMe = createAsyncThunk(
  "users/me/patch",
  async (): Promise<IUserData> => {
    const response = await api.patchUsersMe();
    return response;
  }
);

export const deleteUserMe = createAsyncThunk(
  "users/me/delete",
  async (): Promise<string> => {
    const response = await api.deleteUsersMe();
    return response;
  }
);

export const signUp = createAsyncThunk(
  "users/signup",
  async (data: IUserAuth): Promise<IUserData> => {
    const response = await api.signup(data);
    console.log(response);

    return response;
  }
);
