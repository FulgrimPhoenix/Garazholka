import React, { FC } from "react";
import { Box } from "@mui/material";
import { INPUT_LIST } from "./Register.const";
import { MemoizedInput } from "../../../ui/MemoizedInput/MemoizedInput";
import { useFormik } from "formik";
import { api } from "../../../utils/MainApi";
import { IAuthData } from "src/types/user.types";
import * as Yup from "yup";
import { CustomForm } from "../../../components";

export interface IRegisterData extends IAuthData {
  repeatPassword: string;
  name: string;
  surname: string;
}

const validationSchema = Yup.object({
  login: Yup.string().required("Введите логин"),
  email: Yup.string()
    .email("Введите корректную почту")
    .required("Введите почту"),
  password: Yup.string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .max(24, "Пароль не должен превышать 24 символа")
    .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
    .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
    .matches(
      /[@$!%*?&]/,
      "Пароль должен содержать хотя бы один специальный символ (@, $, !, %, *, ?, &)"
    )
    .required("Введите пароль"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли должны совпадать")
    .required("Подтвердите пароль"),
  name: Yup.string(),
  surname: Yup.string(),
});

const Register: FC = () => {
  const formik = useFormik<IRegisterData>({
    initialValues: {
      login: "",
      email: "",
      password: "",
      repeatPassword: "",
      name: "",
      surname: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      api.signup(values);
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <CustomForm
      title="Регистрация"
      logo="Лого"
      submiteButtonText="Зарегестрироваться"
      handleSubmit={handleSubmit}
      disabled={formik.isValid}
    >
      <Box sx={{ margin: "20px auto 52px" }}>
        {INPUT_LIST.map((el) => (
          <MemoizedInput
            type={el.type}
            placeholder={el.helperText}
            key={el.name}
            name={el.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[el.name]}
            required={el.required}
            error={formik.errors[el.name]}
            touched={formik.touched[el.name]}
          />
        ))}
      </Box>
    </CustomForm>
  );
};

export default Register;
