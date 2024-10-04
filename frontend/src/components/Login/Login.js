import { useEffect, useState } from "react";
import { constants } from "../../utils/constants";
import { LogRegForm } from "../LogRegForm/LogRegForm";
import { LogRegInput } from "../LogRegInput/LogRegInput";
import { useForm } from "../../hooks/useForm";
import { useUrlPathName } from "../../hooks/useUrlPathName";

export function Login({ loginFormData, signin }) {
  const { values, onChange, setValues } = useForm({});
  const [isValid, setIsValid] = useState({
    username: false,
    password: false,
  });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isFormActive, setIsFormActive] = useState(true);
  const currentPath = useUrlPathName();

  useEffect(() => {
    setValues({});
    setIsValid({ username: false, password: false });
    setIsButtonActive(false);
  }, []);

  useEffect(() => {
    if (Object.values(isValid).every((item) => item)) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isValid, currentPath]);

  function validateForm(name, value) {
    setIsValid({ ...isValid, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    signin(values);
    return;
  }
  return (
    <main>
      <LogRegForm
        formData={loginFormData}
        isButtonActive={isButtonActive}
        redirectLink={"/"}
        onSubmit={handleSubmit}
        serverErrorMessage={serverError}
        isFormActive={isFormActive}
        buttonText={loginFormData.buttonText}
      >
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
          name="password"
          value={values["password"]}
          onChange={onChange}
          title="Пароль"
          inputType="password"
          minLength={8}
          maxLength={16}
          validateForm={validateForm}
          placeholder={"Пароль"}
          regax={null}
          advancedValidation={false}
          isFormActive={isFormActive}
        />
      </LogRegForm>
    </main>
  );
}
