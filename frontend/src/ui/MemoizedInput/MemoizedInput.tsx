import { CustomInput } from "./MemoizedInput.styles";
import React, {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  SyntheticEvent,
} from "react";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  type: string;
  required: boolean;
  touched: boolean | undefined;
  error: string | undefined;
  value: string | number | undefined;
  onChange: (e: SyntheticEvent) => void;
  onBlur: (e: SyntheticEvent) => void;
}

const Input: FC<IInput> = ({
  placeholder,
  type = "text",
  error,
  touched,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <CustomInput
      variant="outlined"
      placeholder={placeholder}
      type={type}
      name={name}
      error={Boolean(touched && error)}
      helperText={touched ? error : ""}
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const MemoizedInput: FC<IInput> = React.memo(
  Input,
  (prevProps, nextProps) => {
    return (
      prevProps.value === nextProps.value &&
      prevProps.error === nextProps.error &&
      prevProps.touched === nextProps.touched
    );
  }
);
