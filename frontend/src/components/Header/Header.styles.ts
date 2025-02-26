import { AppBar, styled, Typography } from "@mui/material";

export const HeaderRoot = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: "none",
  marginTop: "20px",
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "normal",
  margin: "0",
  color: theme.palette.text.primary,
}));
