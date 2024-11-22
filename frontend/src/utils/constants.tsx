import tau from "../images/intro/tau.jpg";
import marines from "../images/intro/marines.jpg";
import abbadon from "../images/intro/abbadon.jpg";
import tyranids from "../images/intro/tyranids.jpg";
import guard from "../images/intro/Guard.jpg";
import logo from "../images/forms/xmark.svg";
import backButton from "../images/forms/backButton.svg";
import menuIcon from "../images/header/menuIcon.svg";
import show_more_arrow from "../images/groups/group_list/show_more_arrow.svg";
import show_more_arrow_focused from "../images/groups/group_list/show_more_arrow_focused.svg";
import rino from "../images/groups/group_list/avatars/rino.PNG";
import sterv from "../images/groups/group_list/avatars/sterv.PNG";
import elec from "../images/groups/group_list/avatars/elec.PNG";
import goblin from "../images/groups/group_list/avatars/goblin.PNG";
import octo from "../images/groups/group_list/avatars/octo.PNG";
import venom from "../images/groups/group_list/avatars/venom.PNG";
import billieAvatar from "../images/groupProfile/BillieAvatar.jpg";
import testProfileUserAvatar from "../images/groupProfile/testavatar.jpg";
import {
  IEventItem,
  IGroupFullData,
  IGroupMainData,
  IProfileData,
} from "../types";

export interface Iranges {
  title: string;
  value: number[][];
}

export interface IWayTimePreferenceBlockData {
  title: string;
  isOnlineCheckboxTitle: string;
  wayTimeItems: [
    { wayTime: number; id: string; title: string },
    { wayTime: number; id: string; title: string },
    { wayTime: null; id: string; title: string },
  ];
}

export interface IGroupListData {
  groupLinkImg: (arg?: string) => string;
  groupList: IGroupMainData[];
}

export interface ICalendarBlockData {
  title: string;
  linkOpenBigCalendar: string;
  timeRanges: {
    generateTimeRangeDates: (arg: {
      selectedDate: Date;
      range: number[][];
    }) => [Date, Date];
    ranges: Iranges[];
  };
}

export interface IMapBlockData {
  title: string;
  linkOpenBigMap: string;
}

interface IConstants {
  header: {
    logo: string;
    buttons: string[];
    menuIcon: string;
  };
  registerFormData: {
    logo: string;
    title: string;
    buttonTextFirstPage: string;
    buttonTextSecondPage: string;
    backButton: string;
  };
  loginFormData: {
    logo: string;
    title: string;
    buttonText: string;
  };
  profile: IProfileData;
  eventListData: {
    title: string;
    linkMoreImg: string;
    eventList: IEventItem[];
  };
  mapBlockData: IMapBlockData;
  calendarBlockData: ICalendarBlockData;
  wayTimePreferenceBlockData: IWayTimePreferenceBlockData;
  groupProfile: IGroupFullData;
  intro: {
    title: string;
    interativeName: string;
    interativeDescription: string;
    interativeLocation: string;
    interativeStatistic: [
      { name: string; data: string },
      { name: string; data: string },
      { name: string; data: string },
    ];
    interativeArts: string[];
  };
}

export const constants: IConstants = {
  header: {
    logo: "Garazholka",
    buttons: ["Войти", "Регистрация"],
    menuIcon,
  },
  registerFormData: {
    logo: logo,
    title: "Регистрация",
    buttonTextFirstPage: "Далее",
    buttonTextSecondPage: "Зарегистрироваться",
    backButton,
  },
  loginFormData: {
    logo: logo,
    title: "Войти",
    buttonText: "Войти",
  },
  profile: {
    name: "Райан Гослинг",
    aboutMe:
      "Кенодостаточен. Известен по ролям в независимых фильмах и крупных студийных проектах разных жанров.",
    avatar:
      "https://cdna.artstation.com/p/assets/images/images/037/619/882/large/sean-kelly-officer-k1.jpg",
    groupButtonText: "Мои группы",
    groupButtonImg: show_more_arrow,
    groupLinkImg: (state) =>
      state === "selected" ? show_more_arrow_focused : show_more_arrow,
    groupListData: {
      groupLinkImg: (state) =>
        state === "selected" ? show_more_arrow_focused : show_more_arrow,
      groupList: [
        { avatar: rino, id: "1", groupTitle: "Первая", followersNumber: 3 },
        { avatar: sterv, id: "2", groupTitle: "Вторая", followersNumber: 2 },
        { avatar: elec, id: "3", groupTitle: "Третья", followersNumber: 4 },
        {
          avatar: goblin,
          id: "4",
          groupTitle: "Четвертая",
          followersNumber: 0,
        },
        { avatar: octo, id: "5", groupTitle: "Пятая", followersNumber: 1 },
        { avatar: venom, id: "6", groupTitle: "Шестая", followersNumber: 7 },
      ],
    },
  },
  eventListData: {
    title: "Что хочешь?",
    linkMoreImg: show_more_arrow,
    eventList: [
      {
        id: "11",
        title: "Игра в Warhammer 40000",
        avatar: undefined,
        description: undefined,
        followersNumber: 10,
        location: "ул. Советский проспект 2а",
        duration: 600, //minutes
        isOnline: false,
        timeDiapason: "12.00 - 23.00",
        minimumNumberOfUsers: 2,
      },
      {
        id: "22",
        title: "D&D",
        avatar: undefined,
        description: undefined,
        followersNumber: 10,
        location: "ул. Советский проспект 2а",
        duration: 300, //minutes
        isOnline: false,
        timeDiapason: "12.00 - 23.00",
        minimumNumberOfUsers: 3,
      },
      {
        id: "33",
        title: "Прибухнуть в стиле олдскул",
        avatar: undefined,
        description: undefined,
        followersNumber: 6,
        location: "ул. Советский проспект 2а",
        duration: 240, //minutes
        isOnline: false,
        timeDiapason: "14.00 - 23.59",
        minimumNumberOfUsers: 2,
      },
      {
        id: "44",
        title: "Поиграть в Space marine 2",
        avatar: undefined,
        description: undefined,
        followersNumber: 10,
        location: undefined,
        duration: 720, //minutes
        isOnline: true,
        timeDiapason: "11.00 - 23.59",
        minimumNumberOfUsers: 3,
      },
      {
        id: "55",
        title: "Поход на шашлыки",
        avatar: undefined,
        description: undefined,
        followersNumber: 10,
        location: undefined,
        duration: 240, //minutes
        isOnline: false,
        timeDiapason: "11.00 - 23.59",
        minimumNumberOfUsers: 4,
      },
      {
        id: "66",
        title: "Поиграть в другие настолки",
        avatar: undefined,
        description: undefined,
        followersNumber: 11,
        location: undefined,
        duration: 180, //minutes
        isOnline: false,
        timeDiapason: "11.00 - 23.59",
        minimumNumberOfUsers: 2,
      },
      {
        id: "77",
        title: "Поход в бар",
        avatar: undefined,
        description: undefined,
        followersNumber: 19,
        location: undefined,
        duration: 300, //minutes
        isOnline: false,
        timeDiapason: "11.00 - 23.59",
        minimumNumberOfUsers: 3,
      },
      {
        id: "88",
        title: "Покраскодиско",
        avatar: undefined,
        description: undefined,
        followersNumber: 10,
        location: undefined,
        duration: 300, //minutes
        isOnline: false,
        timeDiapason: "11.00 - 23.59",
        minimumNumberOfUsers: 3,
      },
    ],
  },
  mapBlockData: {
    title: "Откуда я",
    linkOpenBigMap: show_more_arrow,
  },
  calendarBlockData: {
    title: "Когда свободен",
    linkOpenBigCalendar: show_more_arrow,
    // setTimeRange: (selectedDate, [...timeRanges]) => {
    //   timeRanges.length > 1 &&
    //     timeRanges
    //       .sort((a, b) => a[0] - b[0])
    //       .reduce((acc, timeRange, i) => {
    //         i === 0 && [...acc, timeRange];
    //         timeRange[0].getFullYear() === timeRange[1].getFullYear() &&
    //           timeRange[0].getMonth() === timeRange[1].getMonth() &&
    //           timeRange[0].getDate() === timeRange[1].getDate();
    //       }, []);
    timeRanges: {
      generateTimeRangeDates: ({ selectedDate, range }) => [
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          range[0][0],
          range[0][1]
        ),
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          range[1][0],
          range[1][1]
        ),
      ],
      ranges: [
        {
          title: "10.00 - 14.00",
          value: [
            [10, 0],
            [14, 0],
          ],
        },
        {
          title: "12.00 - 16.00",
          value: [
            [12, 0],
            [16, 0],
          ],
        },
        {
          title: "16.00 - 20.00",
          value: [
            [16, 0],
            [20, 0],
          ],
        },
        {
          title: "20.00 - 23.59",
          value: [
            [20, 0],
            [23, 59],
          ],
        },
      ],
    },
  },

  wayTimePreferenceBlockData: {
    title: "Мобильность",
    isOnlineCheckboxTitle: "Онлайн события",
    wayTimeItems: [
      { wayTime: 20, id: "20", title: "В пределах 20 минут" },
      { wayTime: 60, id: "60", title: "В пределах часа" },
      { wayTime: null, id: "120", title: "Без ограничений" },
    ],
  },
  groupProfile: {
    groupTitle: "Gachi Club",
    id: "123456",
    followersNumber: 11,
    description:
      "Welcome to the club buddy. Let's celebrate and suck some dick!",
    avatar: billieAvatar,
    events: ["11", "22", "33", "44", "55", "66", "77", "88"],
    followers: [
      {
        id: "1111111",
        login: "tester1",
        email: "tester1@mail.ru",
        password: "123456",
        name: "Tester1",
        surname: "Tost",
        description: "I am tester",
        avatar: testProfileUserAvatar,
        location: "Мытищи",
        groups: ["123456"],
        event_preference: ["11", "55", "66"],
        work_schedule: {
          "2025-1-22": [
            [new Date(2025, 1, 22, 10), new Date(2025, 1, 22, 16)],
            [new Date(2025, 1, 22, 14), new Date(2025, 1, 22, 20)],
          ],
          "2025-1-23": [
            [new Date(2025, 1, 23, 10), new Date(2025, 1, 23, 16)],
            [new Date(2025, 1, 23, 14), new Date(2025, 1, 23, 20)],
          ],
        },
        way_time_preference: 20,
        online_events: true,
      },
      {
        id: "222222",
        login: "tester2",
        email: "tester2@mail.ru",
        password: "123456",
        name: "Tester2",
        surname: "Tost",
        description: "I am tester2",
        avatar: testProfileUserAvatar,
        location: "Мытищи",
        groups: ["123456"],
        event_preference: ["11", "44", "77"],
        work_schedule: {
          "2025-1-22": [
            [new Date(2025, 1, 22, 10), new Date(2025, 1, 22, 16)],
            [new Date(2025, 1, 22, 14), new Date(2025, 1, 22, 20)],
          ],
          "2025-1-23": [
            [new Date(2025, 1, 23, 10), new Date(2025, 1, 23, 16)],
            [new Date(2025, 1, 23, 14), new Date(2025, 1, 23, 20)],
          ],
        },
        way_time_preference: 60,
        online_events: false,
      },
      {
        id: "333333",
        login: "tester3",
        email: "tester3@mail.ru",
        password: "123456",
        name: "Tester3",
        surname: "Tost",
        description: "I am tester3",
        avatar: testProfileUserAvatar,
        location: "Мытищи",
        groups: ["123456"],
        event_preference: ["11", "33", "88"],
        work_schedule: {
          "2025-1-22": [
            [new Date(2025, 1, 22, 10), new Date(2025, 1, 22, 16)],
            [new Date(2025, 1, 22, 14), new Date(2025, 1, 22, 20)],
          ],
          "2025-1-23": [
            [new Date(2025, 1, 23, 10), new Date(2025, 1, 23, 16)],
            [new Date(2025, 1, 23, 14), new Date(2025, 1, 23, 20)],
          ],
        },
        way_time_preference: null,
        online_events: true,
      },
      {
        id: "444444",
        login: "tester4",
        email: "tester4@mail.ru",
        password: "123456",
        name: "Tester4",
        surname: "Tost",
        description: "I am tester4",
        avatar: testProfileUserAvatar,
        location: "Мытищи",
        groups: ["123456"],
        event_preference: ["11", "22", "77"],
        work_schedule: {
          "2025-1-22": [
            [new Date(2025, 1, 22, 10), new Date(2025, 1, 22, 16)],
            [new Date(2025, 1, 22, 14), new Date(2025, 1, 22, 20)],
          ],
          "2025-1-23": [
            [new Date(2025, 1, 23, 10), new Date(2025, 1, 23, 16)],
            [new Date(2025, 1, 23, 14), new Date(2025, 1, 23, 20)],
          ],
        },
        way_time_preference: 20,
        online_events: false,
      },
      {
        id: "666666",
        login: "tester6",
        email: "tester6@mail.ru",
        password: "123456",
        name: "Tester6",
        surname: "Tost",
        description: "I am tester6",
        avatar: testProfileUserAvatar,
        location: "Мытищи",
        groups: ["123456"],
        event_preference: ["11", "55", "88"],
        work_schedule: {
          "2025-1-22": [
            [new Date(2025, 1, 22, 10), new Date(2025, 1, 22, 16)],
            [new Date(2025, 1, 22, 14), new Date(2025, 1, 22, 20)],
          ],
          "2025-1-23": [
            [new Date(2025, 1, 23, 10), new Date(2025, 1, 23, 16)],
            [new Date(2025, 1, 23, 14), new Date(2025, 1, 23, 20)],
          ],
        },
        way_time_preference: null,
        online_events: true,
      },
      {
        id: "555555",
        login: "tester5",
        email: "tester5@mail.ru",
        password: "123456",
        name: "Tester5",
        surname: "Tost",
        description: "I am tester5",
        avatar: testProfileUserAvatar,
        location: "Мытищи",
        groups: ["123456"],
        event_preference: ["11", "44", "77"],
        work_schedule: {
          "2025-1-22": [
            [new Date(2025, 1, 22, 10), new Date(2025, 1, 22, 16)],
            [new Date(2025, 1, 22, 14), new Date(2025, 1, 22, 20)],
          ],
          "2025-1-23": [
            [new Date(2025, 1, 23, 10), new Date(2025, 1, 23, 16)],
            [new Date(2025, 1, 23, 14), new Date(2025, 1, 23, 20)],
          ],
        },
        way_time_preference: 60,
        online_events: false,
      },
    ],
  },
  intro: {
    title: "Мероприятие дня:",
    interativeName: "Игра в Warhammer 40000!",
    interativeDescription:
      "Сегодня состоится игра в настольнй варгейм 'Warhammer 40000' в 14.00. Успей подтвердить свое участие!",
    interativeLocation: "ул. Толмачёва, 52А, Ивантеевка",
    interativeStatistic: [
      { name: "Минимально для участия", data: "2" },
      { name: "Уже  учавствует", data: "4" },
      { name: "Время проведения", data: "14.00" },
    ],
    interativeArts: [tau, marines, abbadon, tyranids, guard],
  },
};
