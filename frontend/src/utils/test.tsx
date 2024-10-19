import React, { useState, useEffect, useRef } from "react";
import Yup from "yup";
import PropTypes from "prop-types";

interface IInputProps {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

const Input = (props: IInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        ref={inputRef}
        id={props.name}
        name={props.name}
        type={props.type}
        required={props.required ?? false}
        onChange={handleInputChange}
      />
      {errorMessage && <span className="error">{errorMessage}</span>}
    </>
  );
};

function RegistrationForm() {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isValid, setIsValid] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    if (!value || !fieldName) return;

    switch (fieldName) {
      case "email":
        yupSchema
          .validateAt("email", value)
          .then(() =>
            setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" })),
          )
          .catch((err) =>
            setErrors((prevErrors) => ({
              ...prevErrors,
              [fieldName]: err.errors[0],
            })),
          );
        break;

      case "password":
        yupSchema
          .validateAt("password", value)
          .then(() =>
            setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" })),
          )
          .catch((err) =>
            setErrors((prevErrors) => ({
              ...prevErrors,
              [fieldName]: err.errors[0],
            })),
          );
        break;

      default:
        setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    yupSchema
      .validate()
      .then(() => alert("Form submitted successfully!"))
      .catch((err) => setErrors(err.inner));
  };

  React.useEffect(() => {
    if (submitted && Object.keys(errors).length === 0) {
      setErrors({});
    }
  }, [submitted]);

  React.useEffect(() => {
    let isValid = true;

    for (let key in values) {
      if (values[key].trim().length === 0) {
        isValid = false;
        break;
      }
    }

    setIsValid(isValid);
  }, [values]);

  return (
    <form onSubmit={handleSubmit}>
      <Input name="email" label="Email" type="email" required />
      <Input name="password" label="Password" type="password" required />
      <Input
        name="repeat_password"
        label="Repeat Password"
        type="password"
        required
      />
      <Input name="login" label="Login" type="text" required />
      <Input name="firstname" label="First Name" type="text" required />
      <Input name="surname" label="Last Name" type="text" required />
      <button disabled={!isValid}>Submit</button>
    </form>
  );
}

RegistrationForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  isValid: PropTypes.bool,
  submitted: PropTypes.bool,
};

// Example Yup schema
const yupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  repeat_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords do not match",
  ),
  login: Yup.string().required("Login is required"),
  firstname: Yup.string().required("First name is required"),
  surname: Yup.string().required("Last name is required"),
});

export default RegistrationForm;
