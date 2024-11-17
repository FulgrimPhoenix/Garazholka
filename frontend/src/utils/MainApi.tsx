import { IUserData } from "../types";

export type TUserLogData = {
  email?: string;
  password: string;
  login: string;
  name?: string | undefined;
  surname?: string | undefined;
  location?: string | undefined;
  groups?: number | undefined;
};

export type TGroupData = {
  id: string;
  title: string;
  avatar: string | undefined;
  description: string | undefined;
  users: string[] | undefined;
  events: string[] | undefined;
  likeCounter: number | undefined;
};

export interface IRequestOptions {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers: {
    ["Content-Type"]: "application/json";
  };
  credentials?: "include";
  body?: string;
}

export class Api {
  constructor(protected url: string) {}
  _checkResponse(res: any) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(url: string, options: IRequestOptions) {
    return fetch(url, options).then(this._checkResponse.bind(api));
  }

  public signup({ ...args }: TUserLogData): Promise<TUserLogData> {
    return this._request(this.url + "users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: args.login,
        email: args.email,
        password: args.password,
      }),
    });
  }

  public signin({ ...args }: TUserLogData): Promise<IUserData> {
    return this._request(this.url + "token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: args.login,
        password: args.password,
      }),
    });
  }
}

export const api = new Api("http://127.0.0.1:8000/v1/");
