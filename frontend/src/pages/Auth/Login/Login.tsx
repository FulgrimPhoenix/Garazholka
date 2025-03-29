import { Box } from "@mui/material";
import { CustomForm } from "../../../components/index";
import { INPUT_LIST } from "./Login.consts";
import { useFormik } from "formik";
import { IAuthData } from "../../../types/user.types";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "@/store/store";

import { useLoginMutation } from "@/store/api/authApi";
import { setAccessToken } from "@/features/auth/authSlice";
import { Input } from "@/ui";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Введите корректную почту")
    .required("Введите почту"),
  password: Yup.string()
    .min(7, "Пароль должен содержать минимум 7 символов")
    .max(24, "Пароль не должен превышать 24 символа")
    .required("Введите пароль"),
});

const Login = () => {
  const [login] = useLoginMutation();
  const authdata = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik<IAuthData>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      login(values)
        .unwrap()
        .then((response) => {
          dispatch(setAccessToken(response.auth_token));
          navigate("/profile");
        });
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
      disabled={formik.isValid}
    >
      <Box sx={{ margin: "20px auto 52px" }}>
        {INPUT_LIST.map((el) => (
          <Input
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
