import { Container, styled } from "@mui/material";

export const UserProfileRoot = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "0 12px",
  },
}));
