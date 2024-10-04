import React, { useEffect } from "react";
import "./LogRegInput.css";
import { UseValidation } from "../../hooks/useValidation";

type TLogRegInputq = {
  inputType: string;
  minLength: number;
  maxLength: number;
  onChange: (e: React.SyntheticEvent<EventTarget>) => void;
  value: string;
  name: string;
  placeholder: string;
  validateForm: (name: string, valid: boolean) => void;
  regax: string;
  advancedValidation: boolean;
  isFormActive: boolean;
  password: string;
};

export function LogRegInput({
  inputType,
  minLength,
  maxLength,
  onChange,
  value,
  name,
  placeholder,
  validateForm,
  regax,
  advancedValidation,
  isFormActive,
  password,
}: TLogRegInputq) {
  const { validationResult, onChangee, isValid } = UseValidation({
    initialValue: { isValid: false, error: "" },
    regax: regax,
    advancedValidation: advancedValidation,
    password: password,
  });

  useEffect(() => {
    validateForm(name, isValid);
  }, [isValid]);

  function onInputChange(e: React.SyntheticEvent<EventTarget>) {
    onChange(e);
    onChangee(e);
  }

  return (
    <div className="log-reg-input">
      <input
        name={name}
        className={`log-reg-input__input ${
          validationResult.errorMessage === "" || !validationResult.errorMessage
            ? ""
            : "log-reg-input__input_error"
        }`}
        onChange={(e) => onInputChange(e)}
        value={value || ""}
        type={inputType}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        autoComplete="new-password"
        disabled={isFormActive ? false : true}
      />
      <span
        className={`log-reg-input__error-message ${
          validationResult.isValid ? "" : "log-reg-input__error-message-active"
        }`}
      >
        {validationResult.errorMessage}
      </span>
    </div>
  );
}
