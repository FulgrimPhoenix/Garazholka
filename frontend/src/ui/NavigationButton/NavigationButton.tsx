import { useLocation, useNavigate } from "react-router-dom";
import { NavigationButtonRoot } from "./NavigationButton.styles";
import React, { FC } from "react";
import { useTheme } from "@mui/material";

interface INavigationButton {
  path: string;
  title: string;
}

export const NavigationButton: FC<INavigationButton> = React.memo(
  ({ path, title }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const currentLocation = useLocation();

    const handleNavigate = () => {
      navigate(path);
    };

    return (
      <NavigationButtonRoot
        sx={{
          backgroundColor:
            currentLocation.pathname === path
              ? theme.palette.primary.main
              : theme.palette.background.paper,
        }}
        onClick={handleNavigate}
      >
        {title}
      </NavigationButtonRoot>
    );
  }
);
