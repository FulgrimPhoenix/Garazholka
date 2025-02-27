import { Button, ButtonProps, styled } from "@mui/material";

interface MainButtonRootProps extends ButtonProps {
  buttonColor: "primary" | "secondary";
}

export const MainButtonRoot = styled(Button, {
  shouldForwardProp: (prop) => prop !== "buttonColor",
})<MainButtonRootProps>(({ theme, buttonColor }) => ({
  width: "100%",
  height: "52px",
  display: "flex",
  flexDirection: "row",
  margin: "8px auto",
  borderRadius: "12px",
  color: theme.palette.text.primary,
  backgroundColor:
    buttonColor === "primary"
      ? theme.palette.primary.main
      : theme.palette.primary.dark,
}));
