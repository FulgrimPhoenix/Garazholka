import { useLocation, useNavigate } from "react-router-dom";
import { NavigationButtonRoot } from "./NavigationButton.styles";
import React, { FC } from "react";

interface INavigationButton {
  path: string;
  title: string;
}

export const NavigationButton: FC<INavigationButton> = React.memo(
  ({ path, title }) => {
    const navigate = useNavigate();
    const currentLocation = useLocation();

    const handleNavigate = () => {
      navigate(path);
    };

    return (
      <NavigationButtonRoot
        isSelected={currentLocation.pathname === path}
        onClick={handleNavigate}
      >
        {title}
      </NavigationButtonRoot>
    );
  }
);
