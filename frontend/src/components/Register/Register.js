import { useEffect, useState } from "react";
import { constants } from "../../utils/constants";
import { LogRegForm } from "../LogRegForm/LogRegForm";
import { LogRegInput } from "../LogRegInput/LogRegInput";
import { useForm } from "../../hooks/useForm";
import { useUrlPathName } from "../../hooks/useUrlPathName";
import { useAppSelector } from "../../app/store";
import { signUp } from "../../features/users/usersThunks";

export function Register({ registerFormData, signup }) {
  const {} = useAppSelector((state) => state.user);
  const { values, onChange, setValues } = useForm({});
  const [isValid, setIsValid] = useState({
    username: false,
    email: false,
    password: false,
    passwordRepeat: false,
    name: "",
    surname: "",
    address: "",
    id: null,
  });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isFormActive, setIsFormActive] = useState(true);
  const [currentRegPage, setCurrentRegPage] = useState(true);
  const currentPath = useUrlPathName();

  useEffect(() => {
    setValues({});
    setIsValid({
      username: false,
      email: false,
      password: false,
      passwordRepeat: false,
      name: true,
      surname: true,
      address: true,
      id: true,
    });
    setIsButtonActive(false);
  }, []);

  useEffect(() => {
    if (
      Object.values(isValid).every((item) => item) &&
      values["password"] === values["passwordRepeat"]
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isValid, currentPath]);

  function validateForm(name, value) {
    setIsValid({ ...isValid, [name]: value });
  }
  function handleRegistrationPage(e) {
    e.preventDefault();
    setCurrentRegPage(!currentRegPage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentRegPage) {
      setCurrentRegPage(!currentRegPage);
      return;
    }
    signUp(values);

    return;
  }
  return (
    <main>
      <LogRegForm
        formData={registerFormData}
        isButtonActive={isButtonActive}
        redirectLink={"/"}
        onSubmit={handleSubmit}
        serverErrorMessage={serverError}
        isFormActive={isFormActive}
        titleButton={
          currentRegPage ? (
            ""
          ) : (
            <button
              type="submit"
              className="log-reg-form__back-button"
              onClick={(e) => handleRegistrationPage(e)}
            >
              <img
                className="log-reg-form__back-pic"
                src={registerFormData.backButton}
                alt="назад"
              />
            </button>
          )
        }
        buttonText={
          currentRegPage
            ? registerFormData.buttonTextFirstPage
            : registerFormData.buttonTextSecondPage
        }
      >
        {currentRegPage ? (
          <>
            <LogRegInput
              name="username"
              value={values["username"]}
              onChange={onChange}
              inputType="text"
              minLength={2}
              maxLength={30}
              validateForm={validateForm}
              placeholder={"Логин"}
              regax={/[^a-z0-9\sё-]/gi}
              advancedValidation={true}
              isFormActive={isFormActive}
            />
            <LogRegInput
              name="email"
              value={values["email"]}
              onChange={onChange}
              inputType="email"
              minLength={10}
              maxLength={30}
              validateForm={validateForm}
              placeholder={"Почта"}
              regax={
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
              }
              advancedValidation={true}
              isFormActive={isFormActive}
            />
            <LogRegInput
              name="password"
              value={values["password"]}
              onChange={onChange}
              inputType="password"
              minLength={8}
              maxLength={16}
              validateForm={validateForm}
              placeholder={"Пароль"}
              regax={null}
              advancedValidation={false}
              isFormActive={isFormActive}
            />
            <LogRegInput
              name="passwordRepeat"
              value={values["passwordRepeat"]}
              onChange={onChange}
              inputType="password"
              minLength={8}
              maxLength={16}
              validateForm={validateForm}
              placeholder={"Повторите пароль"}
              regax={null}
              advancedValidation={true}
              isFormActive={isFormActive}
              password={values["password"]}
            />
          </>
        ) : (
          <>
            <LogRegInput
              name="name"
              value={values["name"]}
              onChange={onChange}
              inputType="text"
              minLength={2}
              maxLength={30}
              validateForm={validateForm}
              placeholder={"Имя (необязательно)"}
              regax={/[^а-я\sё-]/gi}
              advancedValidation={true}
              isFormActive={isFormActive}
            />
            <LogRegInput
              name="surname"
              value={values["surname"]}
              onChange={onChange}
              inputType="text"
              minLength={2}
              maxLength={30}
              validateForm={validateForm}
              placeholder={"Фамилия (необязательно)"}
              regax={/[^а-я\sё-]/gi}
              advancedValidation={true}
              isFormActive={isFormActive}
            />
            <LogRegInput
              name="address"
              value={values["address"]}
              onChange={onChange}
              inputType="text"
              minLength={2}
              maxLength={60}
              validateForm={validateForm}
              placeholder={"Адрес проживания (необязательно)"}
              regax={/[^а-я\sё-]/gi}
              advancedValidation={false}
              isFormActive={isFormActive}
            />
            <LogRegInput
              name="id"
              value={values["id"]}
              onChange={onChange}
              inputType="text"
              minLength={9}
              maxLength={9}
              validateForm={validateForm}
              placeholder={"id группы (необязательно)"}
              regax={/[^0-9\s]/gi}
              advancedValidation={true}
              isFormActive={isFormActive}
            />
          </>
        )}
      </LogRegForm>
    </main>
  );
}
