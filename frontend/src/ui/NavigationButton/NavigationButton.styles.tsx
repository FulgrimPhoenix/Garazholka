import { Button, ButtonProps, styled } from "@mui/material";

interface NavigationButtonProps extends ButtonProps {
  isSelected?: boolean; // Добавление кастомного пропса
}

export const NavigationButtonRoot = styled(Button)<NavigationButtonProps>(
  ({ theme, isSelected }) => ({
    width: "50%",
    color: "inherit",
    borderRadius: "12px",
    transition: "background 0.2s linear",
    backgroundColor: isSelected
      ? theme.palette.primary.main
      : theme.palette.background.paper,
  })
);
