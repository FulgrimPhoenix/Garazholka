type TUserLogData = {
  email: string;
  password: string;
  username: string;
  name?: string | undefined;
  surname?: string | undefined;
  location?: string | undefined;
  groups?: number | undefined;
};

type TGroupData = {
  id: string;
  title: string;
  avatar: string | undefined;
  description: string | undefined;
  users: string[] | undefined;
  events: string[] | undefined;
  likeCounter: number | undefined;
};

type TUserData = {
  id: number;
  login: string;
  email: string;
  password: string;
  name: string | undefined;
  surname: string | undefined;
  description: string | undefined;
  avatar: string | undefined;
  location: string | undefined;
  groups: number | undefined;
  event_preference: undefined;
  work_schedule: Date | undefined;
  way_time_preference: number;
  online_events: boolean;
};

interface IRequestOptions {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers: {
    ["Content-Type"]: "application/json";
  };
  credentials?: "include";
  body?: string;
}

class Api {
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
        username: args.username,
        email: args.email,
        password: args.password,
      }),
    });
  }

  public signin({ ...args }: TUserLogData): Promise<TUserData> {
    return this._request(this.url + "token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: args.username,
        password: args.password,
      }),
    });
  }
}

export const api = new Api("http://127.0.0.1:8000/v1/");
