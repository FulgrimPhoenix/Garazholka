import { Box } from "@mui/material";
import { CustomForm } from "../../../components/index";
import { INPUT_LIST } from "./Login.const";
import { MemoizedInput } from "src/ui/MemoizedInput/MemoizedInput";
import { useFormik } from "formik";
import { IAuthData } from "../../../types/user.types";
import * as Yup from "yup";
import { api } from "../../../utils/MainApi";

const validationSchema = Yup.object({
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
});

const Login = () => {
  const formik = useFormik<IAuthData>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      api.signin(values);
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <CustomForm
      title="Вход"
      logo="Лого"
      submiteButtonText="Войти"
      handleSubmit={handleSubmit}
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

export default Login;
