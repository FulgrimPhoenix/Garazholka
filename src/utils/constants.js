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

export const constants = {
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
    groupList: [
      { avatar: rino, id: 1, title: "Первая", followers: 3 },
      { avatar: sterv, id: 2, title: "Вторая", followers: 2 },
      { avatar: elec, id: 3, title: "Третья", followers: 4 },
      { avatar: goblin, id: 4, title: "Четвертая", followers: 0 },
      { avatar: octo, id: 5, title: "Пятая", followers: 1 },
      { avatar: venom, id: 6, title: "Шестая", followers: 7 },
    ],
  },
  groupListData: {
    groupLinkImg: (state) =>
      state === "selected" ? show_more_arrow_focused : show_more_arrow,
    groupList: [
      { avatar: rino, id: 1, title: "Первая", followers: 3 },
      { avatar: sterv, id: 2, title: "Вторая", followers: 2 },
      { avatar: elec, id: 3, title: "Третья", followers: 4 },
      { avatar: goblin, id: 4, title: "Четвертая", followers: 0 },
      { avatar: octo, id: 5, title: "Пятая", followers: 1 },
      { avatar: venom, id: 6, title: "Шестая", followers: 7 },
    ],
  },
  eventListData: {
    title: "Мои мероприятия",
    linkMoreImg: show_more_arrow,
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
