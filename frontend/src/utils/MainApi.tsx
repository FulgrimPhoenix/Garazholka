import { IUserData } from "../types";

export interface IUserAuth extends Pick<IUserData, "email" | "password"> {
  login?: string;
}

// export type IUserAuth = {
//   email: string;
//   password: string;
//   login?: string;
//   name?: string | undefined;
//   surname?: string | undefined;
//   location?: string | undefined;
//   groups?: number | undefined;
// };

// export type TGroupData = {
//   id: string;
//   title: string;
//   avatar: string | undefined;
//   description: string | undefined;
//   users: string[] | undefined;
//   events: string[] | undefined;
//   likeCounter: number | undefined;
// };

export interface IRequestOptions {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: {
    "Content-Type": "application/json";
    Authorization?: string;
  };
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
    const token = localStorage.getItem("token");
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }).then(this._checkResponse.bind(api));
  }

  public signup({ ...credentials }: IUserAuth): Promise<IUserData> {
    return this._request(this.url + "users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        login: credentials.login,
        password: credentials.password,
      }),
    });
  }

  public signin({
    ...credentials
  }: IUserAuth): Promise<Record<"auth_token", string>> {
    return this._request(this.url + "token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
  }

  public getUsersMe(): Promise<IUserData> {
    return this._request(this.url + "users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public patchUsersMe(): Promise<IUserData> {
    return this._request(this.url + "users/me", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
  }

  public deleteUsersMe(): Promise<string> {
    return this._request(this.url + "users/me", {
      method: "DELETE",
    });
  }

  public getUsersById(id: string): Promise<IUserData> {
    return this._request(this.url + `users/${id}`, { method: "GET" });
  }
}

export const api = new Api("http://127.0.0.1:8000/api/");
