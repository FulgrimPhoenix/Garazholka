import { Link, useNavigate } from "react-router-dom";
import "./LogRegForm.css";
import { FormButton } from "../FormButton/FormButton";
import { CustomLinkLogButton } from "../CustomLinkButton/CustomLinkLogButton";

export function LogRegForm({
  children,
  formData,
  isButtonActive,
  onSubmit,
  serverErrorMessage,
  isFormActive
}) {

  return (
    <form onSubmit={onSubmit} className="log-reg-form" noValidate>
      <Link className="log-reg-form__logo" to="/">
        <picture>
          <img className="log-reg-form__logo-pic" src={formData.logo} alt="Логотип" />
        </picture>
      </Link>
      <h1 className="log-reg-form__title">{formData.title}</h1>
      <div className="log-reg-form__nav-container">
        <CustomLinkLogButton title={"Регистрация"} to={"/signup"} styleMode={"log-reg-form__nav-button"}/>
        <CustomLinkLogButton title={"Войти"} to={"/signin"} styleMode={"log-reg-form__nav-button"}/>
      </div>
      {children}
      <span className="log-reg-form__server-error">{serverErrorMessage}</span>
      <FormButton
        buttonStyle="log-reg-form__button"
        isButtonActive={isButtonActive}
        buttonText={formData.buttonText}
        isFormActive={isFormActive}
      />
    </form>
  );
}
