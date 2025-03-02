import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { TAppState } from "../store";
import { IAuthData } from "src/types/user.types";
import { setAccessToken, setAuthError } from "../../features/auth/authSlice";

// const getAccessToken = () => localStorage.getItem("accessToken");

// const clearAccessToken = () => localStorage.removeItem("accessToken");

// const baseQuery = fetchBaseQuery({
//   baseUrl: "https://api.example.com",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as TAppState).auth.accessToken;

//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }

//     return headers;
//   },
// });

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  tagTypes: ["AuthApi"],
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, IAuthData>({
      query: (credentials) => ({
        url: "/users/",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setAccessToken(data.token);
        } catch (error) {
          setAuthError(JSON.stringify(error));
        }
      },
    }),
    signup: builder.mutation<{ id: number } | IAuthData, IAuthData>({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
