import { useState } from "react";

export const UseValidation = ({
  initialValue,
  regax,
  advancedValidation,
  password,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationResult, setValidationResult] = useState(initialValue);

  function inputAdvancedValidation(e) {
    const inputValue = e.target.value;
    if (e.target.name === "email") {
      return String(inputValue).match(regax) ? true : false;
    } else if (e.target.name === "passwordRepeat") {
      return inputValue === password;
    } else {
      return !regax.test(String(inputValue));
    }
  }

  return {
    validationResult,
    onChangee: (e) => {
      if (e.target.validity.valid) {
        if (e.target.value === "" || undefined) {
          setIsValid(false);
          setErrorMessage("Запоните это поле");
          setValidationResult({
            isValid: false,
            errorMessage: "Запоните это поле",
          });
          return;
        }
        if (!advancedValidation || inputAdvancedValidation(e)) {
          setIsValid(true);
          setErrorMessage("");
          setValidationResult({ isValid: true, errorMessage: "" });
          return;
        } else if (e.target.name === "passwordRepeat") {
          setIsValid(false);
          setErrorMessage("Пароли не совпадают");
          setValidationResult({
            isValid: false,
            errorMessage: "Пароли не совпадают",
          });
          return;
        } else if (e.target.name === "login") {
          setIsValid(false);
          setErrorMessage("Поле заполнено неверно. Используйте только латинские буквы и цифры");
          setValidationResult({
            isValid: false,
            errorMessage: "Поле заполнено неверно. Используйте только латинские буквы и цифры",
          });
          return;
        } else {
          setIsValid(false);
          setErrorMessage("Поле заполнено неверно");
          setValidationResult({
            isValid: false,
            errorMessage: "Поле заполнено неверно",
          });
          return;
        }
      } else {
        console.log(4);
        setIsValid(e.target.validity.valid);
        setErrorMessage(e.target.validationMessage);
        setValidationResult({
          isValid: e.target.validity.valid,
          errorMessage: e.target.validationMessage,
        });
        return;
      }
    },
    isValid,
    setIsValid,
  };
};
