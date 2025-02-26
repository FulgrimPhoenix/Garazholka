import { IAuthData } from "src/types/user.types";

interface Iinput_list {
  label: string;
  name: keyof IAuthData;
  type: "text" | "email" | "password";
  required: boolean;
  helperText: string;
}

export const INPUT_LIST: Iinput_list[] = [
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
];
