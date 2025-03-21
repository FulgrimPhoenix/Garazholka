import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Введите корректную почту")
    .required("Введите почту"),
  password: Yup.string()
    .min(7, "Пароль должен содержать минимум 7 символов")
    .max(24, "Пароль не должен превышать 24 символа")
    .required("Введите пароль"),
});
