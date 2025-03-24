import { Container, styled } from "@mui/material";

export const LayoutRoot = styled(Container)(({ theme }) => ({
  padding: "0",
  width: "100%",
  [theme.breakpoints.up("sm")]: { padding: "0" },
}));
