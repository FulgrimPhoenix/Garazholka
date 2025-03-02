import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthData } from "../../types/user.types";
import { setAccessToken, setAuthError } from "../../features/auth/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  tagTypes: ["AuthApi"],
  endpoints: (builder) => ({
    login: builder.mutation<{ auth_token: string }, IAuthData>({
      query: (credentials) => ({
        url: "auth/token/login/",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        console.log("qery");

        try {
          const { data } = await queryFulfilled; // Ожидаем разрешения промиса
          console.log("token", data);

          // Диспатчим токен
          dispatch(setAccessToken(data.auth_token));
        } catch (error) {
          // Ловим ошибки запроса
          console.error("Ошибка при получении токена", error);
          dispatch(
            setAuthError(
              error instanceof Error ? error.message : "Неизвестная ошибка"
            )
          );
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
