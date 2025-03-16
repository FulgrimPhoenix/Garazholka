import { ButtonProps, Typography } from "@mui/material";
import React, { FC } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { MainButtonRoot } from "./MainButton.styles";

interface IMainButton extends ButtonProps {
  title: string;
  functionType: "dropDown" | "simple";
  isOpen?: boolean;
  buttonColor: "primary" | "secondary";
}

const MainButton: FC<IMainButton> = React.memo(
  ({ title, functionType, isOpen, buttonColor, ...props }) => {
    return (
      <>
        {functionType === "simple" ? (
          <MainButtonRoot
            sx={{
              justifyContent: "center",
            }}
            buttonColor={buttonColor}
            {...props}
          >
            {title}
          </MainButtonRoot>
        ) : (
          <MainButtonRoot
            sx={{
              justifyContent: "space-between",
            }}
            buttonColor={buttonColor}
            {...props}
          >
            <Typography>{title}</Typography>
            <ArrowBackIosNewRoundedIcon
              sx={{
                transform: isOpen ? "rotate(270deg)" : "rotate(180deg)",
                transition: "transform 0.2s linear",
              }}
            />
          </MainButtonRoot>
        )}
      </>
    );
  }
);

export default MainButton;
