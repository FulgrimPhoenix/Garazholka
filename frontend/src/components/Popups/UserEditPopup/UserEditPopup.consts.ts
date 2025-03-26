import { IUserData } from "@/types/user.types";

export type TCardParams = Pick<
  IUserData,
  "description" | "first_name" | "last_name"
> & { avatar: File | null };

interface Iinput_list {
  label: string;
  name: keyof TCardParams;
  type: "text" | "file";
  required: boolean;
  helperText: string;
}

export const INPUT_LIST: Iinput_list[] = [
  {
    label: "Имя",
    name: "first_name",
    type: "text",
    required: false,
    helperText: "Введите имя",
  },
  {
    label: "Фамилия",
    name: "last_name",
    type: "text",
    required: false,
    helperText: "Введите фамилию",
  },
  {
    label: "Описанию",
    name: "description",
    type: "text",
    required: false,
    helperText: "Напишите о себе",
  },
  // {
  //   label: "Аватар",
  //   name: "avatar",
  //   type: "file",
  //   required: false,
  //   helperText: "Загрузите свое фото",
  // },
];
