import React, { useEffect } from "react";
import "./LogRegInput.css";
import { UseValidation } from "../../hooks/useValidation";

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
  password
}) {
  const { validationResult, onChangee, isValid } = UseValidation({
    initialValue: { isValid: false, error: "" },
    regax: regax,
    advancedValidation: advancedValidation,
    password: password
  });

  useEffect(() => {
    validateForm(name, isValid);
  }, [isValid]);

  function onInputChange(e) {
    console.log(e.target.value, password);
    
    onChange(e);
    onChangee(e);
  }

  return (
    <div className="log-reg-input">
      <input
        name={name}
        className={`log-reg-input__input ${validationResult.errorMessage === "" || !validationResult.errorMessage ? "" : "log-reg-input__input_error"}`}
        onChange={(e) => onInputChange(e)}
        value={value || ""}
        type={inputType}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        autoComplete="new-password"
        disabled = {(isFormActive)? "" : "disabled"}
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
