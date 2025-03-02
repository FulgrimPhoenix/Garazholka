import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "./api/authApi";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer, // Включаем редьюсер, включая authApi и userApi
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // Добавляем middleware для RTK Query
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<TAppState>();
export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
