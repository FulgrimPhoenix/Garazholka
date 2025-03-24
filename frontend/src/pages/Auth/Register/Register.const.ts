import { IRegisterData } from "./Register";

interface Iinput_list {
  label: string;
  name: keyof IRegisterData;
  type: "text" | "email" | "password";
  required: boolean;
  helperText: string;
}

export const INPUT_LIST: Iinput_list[] = [
  {
    label: "Логин",
    name: "login",
    type: "text",
    required: true,
    helperText: "Введите логин*",
  },
  {
    label: "Почта",
    name: "email",
    type: "email",
    required: true,
    helperText: "Введите почту*",
  },
  {
    label: "Пароль",
    name: "password",
    type: "password",
    required: true,
    helperText: "Введите пароль*",
  },
  {
    label: "Подтверждение пароля",
    name: "repeatPassword",
    type: "password",
    required: true,
    helperText: "Введите пароль еще раз*",
  },
  {
    label: "Имя",
    name: "name",
    type: "text",
    required: false,
    helperText: "Введите имя",
  },
  {
    label: "Фамилия",
    name: "surname",
    type: "text",
    required: false,
    helperText: "Введите фамилию",
  },
];
