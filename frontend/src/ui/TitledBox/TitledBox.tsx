import { Box, GridProps, Typography, useTheme } from "@mui/material";
import { TitleButton, TitledBoxRoot, TitleStatic } from "./TitledBox.style";
import React, { FC, ReactNode } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

interface ITitledBox extends GridProps {
  title: string;
  isTitleActive: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const TitledBox: FC<ITitledBox> = React.memo(
  ({ title, isTitleActive, onClick, children, ...props }) => {
    const theme = useTheme();

    return (
      <TitledBoxRoot {...props} item>
        {isTitleActive ? (
          <TitleButton onClick={onClick} sx={{}}>
            {title}
            <ArrowBackIosNewRoundedIcon
              sx={{
                transform: "rotate(180deg)",
              }}
            />
          </TitleButton>
        ) : (
          <TitleStatic as="h3" sx={{ color: theme.palette.text.primary }}>
            {title}
          </TitleStatic>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>{children}</Box>
      </TitledBoxRoot>
    );
  }
);

export default TitledBox;
