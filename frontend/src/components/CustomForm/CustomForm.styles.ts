import {
  Button,
  ButtonProps,
  Container,
  styled,
  Typography,
} from "@mui/material";

export const FormRoot = styled(Container)({
  display: "flex",
  padding: "0 8px",
});

export const FormContaeiner = styled("form")(({ theme }) => ({
  margin: "52px auto",
  width: "100%",
}));

export const FormTitle = styled(Typography)({
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: "100%",
  color: theme.palette.text.primary,
  height: "50px",
  borderRadius: "12px",
  background: theme.palette.secondary.main,
  "&:disabled": {
    opacity: "0.5",
  },
}));
