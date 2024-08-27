import tau from "../images/intro/tau.jpg";
import marines from "../images/intro/marines.jpg";
import abbadon from "../images/intro/abbadon.jpg";
import tyranids from "../images/intro/tyranids.jpg";
import guard from "../images/intro/Guard.jpg";
import logo from "../images/forms/xmark.svg"
import backButton from "../images/forms/backButton.svg"

export const constants = {
  header: {
    logo: "Garazholka",
    buttons: ["Войти", "Регистрация"],
  },
  registerFormData: {
    logo: logo,
    title: "Регистрация",
    buttonTextFirstPage: "Далее",
    buttonTextSecondPage: "Зарегистрироваться",
    backButton
  },
  loginFormData: {
    logo: logo,
    title: "Войти",
    buttonText: "Войти",
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
