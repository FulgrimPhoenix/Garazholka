export interface IUserData {
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
}

export interface IEventItem {
  id: string;
  title: string;
  avatar: string | undefined;
  description: string | undefined;
  followersNumber: number;
  location: string | undefined;
  duration: number; //minutes
  isOnline: boolean;
  timeDiapason: string;
  minimumNumberOfUsers: number;
}

export type TEventList = IEventItem[];

export interface IEventState {
  id: string;
  selected: boolean;
}
export type TEventStatesList = IEventState[];

export interface IGroupData {
  avatar: string;
  id: string;
  title: string;
  followersNumber: number;
}

export interface IGroupFullData extends IGroupData {
  description?: string;
  followers?: IUserData;
}

export interface IProfileData {
  name: string;
  aboutMe: string;
  avatar: string;
  groupButtonText: string;
  groupButtonImg: string;
  groupLinkImg: (arg?: string | undefined) => string;
  groupListData: {
    groupLinkImg: (arg?: string | undefined) => string;
    groupList: IGroupData[];
  };
}
