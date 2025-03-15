import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "./api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { userApi } from "./api/userApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, authApi.middleware),
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppSelector: <TSelected>(
  selector: (state: TAppState) => TSelected
) => TSelected = useSelector;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
