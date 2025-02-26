import React, {
  DetailedHTMLProps,
  FC,
  FormHTMLAttributes,
  ReactNode,
} from "react";
import {
  FormContaeiner,
  FormTitle,
  FormRoot,
  SubmitButton,
} from "./CustomForm.styles";
import { ButtonGroup, Typography } from "@mui/material";
import { NavigationButton } from "src/ui/NavigationButton/NavigationButton";

interface ICustonForm
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  title: string;
  logo: string;
  submiteButtonText: string;
  handleSubmit: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const CustomForm: FC<ICustonForm> = React.memo(
  ({
    title,
    logo,
    submiteButtonText,
    handleSubmit,
    children,
    disabled,
    ...props
  }) => {
    return (
      <FormRoot>
        <FormContaeiner {...props}>
          <Typography component="h4" variant="h5">
            {logo}
          </Typography>
          <FormTitle>{title}</FormTitle>
          <ButtonGroup
            size="large"
            variant="contained"
            aria-label="Form selector"
            color="primary"
            sx={{ width: "100%", mt: "20px" }}
          >
            <NavigationButton title="Регистрация" path="/signup" />
            <NavigationButton title="Войти" path="/signin" />
          </ButtonGroup>
          {children}
          <SubmitButton
            variant="contained"
            onClick={handleSubmit}
            disabled={disabled ? false : true}
          >
            {submiteButtonText}
          </SubmitButton>
        </FormContaeiner>
      </FormRoot>
    );
  }
);

export default CustomForm;
