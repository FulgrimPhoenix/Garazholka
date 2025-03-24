import { TAppDispatch } from "../../app/store";
import { api, IUserAuth } from "../../utils/MainApi";
import { loginRequest, loginSuccess, loginFailure, logout } from "./authSlice";

export const signin =
  (credentials: IUserAuth) => async (dispatch: TAppDispatch) => {
    dispatch(loginRequest());

    api
      .signin(credentials)
      .then((response) => {
        dispatch(loginSuccess(response.auth_token));
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(loginFailure(err.message));
        } else {
          dispatch(loginFailure("Something wrong"));
        }
      });
  };

export const checkAuth = () => (dispatch: TAppDispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    // Optionally verify token or fetch user data
    dispatch(loginSuccess(token));
  } else {
    dispatch(logout());
  }
};
