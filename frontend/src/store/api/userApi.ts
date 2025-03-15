import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAppState } from "../store";
import { IAuthData, IUserData } from "@/types/user.types";
import { setAccessToken, setAuthError } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/",
  prepareHeaders: (headers, { getState }) => {
    const store = getState() as TAppState;
    const token = store.auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    userMe: builder.query<IUserData, void>({
      query: () => "users/me",
      providesTags: [{ type: "User", id: "USER" }],
    }),
  }),
});

export const { useUserMeQuery } = userApi;
