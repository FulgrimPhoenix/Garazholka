export interface IUserData {
  id: string;
  login: string;
  email: string;
  password: string;
  name: string | undefined;
  surname: string | undefined;
  description: string | undefined;
  avatar: string | undefined;
  location: string | undefined;
  groups: string[] | undefined;
  event_preference: string[] | undefined;
  work_schedule: Record<string, Date[][]> | undefined;
  way_time_preference: 20 | 60 | null;
  online_events: boolean;
}

export interface IAuthData {
  login?: string;
  email: string;
  password: string;
}

export type TuserStatus = "idle" | "fetching" | "failed" | "succeeded";

export type Tcolumn = { field: string; headerName: string; flex: number };
