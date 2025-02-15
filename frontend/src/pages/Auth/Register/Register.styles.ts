import {
  Button,
  ButtonProps,
  Container,
  styled,
  Typography,
} from "@mui/material";

interface NavigationButtonProps extends ButtonProps {
  isSelected?: boolean; // Добавление кастомного пропса
}

export const RegisterRoot = styled(Container)({
  display: "flex",
  padding: "0 8px",
});

export const RegisterForm = styled("form")(({ theme }) => ({
  margin: "52px auto",
  width: "100%",
}));

export const RegisterFormTitle = styled(Typography)({
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
});

export const NavigationButton = styled(Button)<NavigationButtonProps>(
  ({ theme, isSelected }) => ({
    width: "50%",
    color: "inherit",
    borderRadius: "12px",
    backgroundColor: isSelected ? theme.palette.primary.main : "secondary",
  })
);
