import tau from "../images/intro/tau.jpg";
import marines from "../images/intro/marines.jpg";
import abbadon from "../images/intro/abbadon.jpg";
import tyranids from "../images/intro/tyranids.jpg";
import guard from "../images/intro/Guard.jpg";
import logo from "../images/forms/xmark.svg";
import backButton from "../images/forms/backButton.svg";
import menuIcon from "../images/header/menuIcon.svg";

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
    groupButtonText: "Группы",
    groupList: [
      { avatar: "", id: 1, title: "Первая" },
      { avatar: "", id: 2, title: "Вторая" },
      { avatar: "", id: 3, title: "Третья" },
      { avatar: "", id: 4, title: "Четвертый" },
      { avatar: "", id: 5, title: "Пятый" },
      { avatar: "", id: 6, title: "Шестой" },
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
