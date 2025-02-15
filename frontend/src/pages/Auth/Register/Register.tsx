import { FC } from "react";
import {
  NavigationButton,
  RegisterForm,
  RegisterFormTitle,
  RegisterRoot,
} from "./Register.styles";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { INPUT_LIST } from "./Register.const";
import { Input } from "src/ui/Input/Input";
import { useFormik } from "formik";
import { api } from "../../../utils/MainApi";

export const Register: FC = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      api.signup(values);
    },
  });

  return (
    <RegisterRoot>
      <RegisterForm>
        <Typography component="h4" variant="h5">
          Лого
        </Typography>
        <RegisterFormTitle>Регистрация</RegisterFormTitle>
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="Form selector"
          color="secondary"
          sx={{ width: "100%", mt: "20px" }}
        >
          <NavigationButton isSelected={true}>Регистрация</NavigationButton>
          <NavigationButton isSelected={false}>Вход</NavigationButton>
        </ButtonGroup>
        <Box sx={{ margin: "20px auto" }}>
          {INPUT_LIST.map((el) => (
            <Input type={el.type} placeholder={el.helperText} key={el.name} />
          ))}
        </Box>
        <Button variant="contained" onClick={() => formik.handleSubmit}>
          Отправить
        </Button>
      </RegisterForm>
    </RegisterRoot>
  );
};
