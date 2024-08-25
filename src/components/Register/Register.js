import { useState } from "react";
import { constants } from "../../utils/constants";
import { LogRegForm } from "../LogRegForm/LogRegForm";
import { LogRegInput } from "../LogRegInput/LogRegInput";

export function Register({ registerFormData }) {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [serverError, setServerError] = useState("");
  const [isFormActive, setIsFormActive] = useState(true);

  function handleSubmit(){
    return
  }
  return (
    <main>
      <LogRegForm
        formData={registerFormData}
        isButtonActive={isButtonActive}
        redirectLink={"/movies"}
        onSubmit={handleSubmit}
        serverErrorMessage={serverError}
        isFormActive={isFormActive}
      >
        <LogRegInput
          name="name"
          value={values["name"]}
          onChange={onChange}
          title="Имя"
          inputType="text"
          minLength={2}
          maxLength={30}
          validateForm={validateForm}
          placeholder={"Илья"}
          regax={/[^a-zа-я\sё-]/gi}
          advancedValidation={true}
          isFormActive={isFormActive}
        />
      </LogRegForm>
    </main>
  );
}
