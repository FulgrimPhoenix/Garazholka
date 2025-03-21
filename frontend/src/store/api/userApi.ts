import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAppState } from "../store";
import { IUserData } from "@/types/user.types";
import { IGroupTag } from "@/types/group.types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/", //"http://127.0.0.1:8000/"
  prepareHeaders: (headers, { getState }) => {
    const store = getState() as TAppState;
    const token = store.auth.accessToken;

    if (token) {
      headers.set("Authorization", `Token ${token}`);
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
    getMyGroupsTags: builder.query<IGroupTag[], void>({
      query: () => "groupsTags/",
      providesTags: [{ type: "User", id: "GROUPS_TAGS" }],
    }),
  }),
});

export const { useUserMeQuery, useGetMyGroupsTagsQuery } = userApi;
