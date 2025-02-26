import { AppBar, styled, Toolbar, Typography } from "@mui/material";

export const HeaderRoot = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: "none",
  marginTop: "20px",
}));

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "0 12px",
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "normal",
  margin: "0",
  color: theme.palette.text.primary,
}));
