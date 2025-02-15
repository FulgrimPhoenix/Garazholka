import { CustomInput } from "./Input.styles";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  type: string;
}

export const Input: FC<IInput> = ({ placeholder, type = "text", ...props }) => {
  return (
    <CustomInput
      variant="outlined"
      placeholder={placeholder}
      type={type}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
