import { useEffect, useState } from "react";
import { constants } from "../../utils/constants";
import { LogRegForm } from "../LogRegForm/LogRegForm";
import { LogRegInput } from "../LogRegInput/LogRegInput";
import { useForm } from "../../hooks/useForm";
import { useUrlPathName } from "../../hooks/useUrlPathName";

export function Login({ loginFormData }) {
  const { values, onChange, setValues } = useForm({});
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isFormActive, setIsFormActive] = useState(true);
  const currentPath = useUrlPathName();

  useEffect(() => {
    setValues({});
    setIsValid({email: false, password: false});
    setIsButtonActive(false);
  }, []);

  useEffect(() => {
    console.log(isValid);
    
    if (Object.values(isValid).every((item) => item)) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isValid, currentPath]);

  function validateForm(name, value) {
    setIsValid({ ...isValid, [name]: value });
  }

  function handleSubmit() {
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
      >
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