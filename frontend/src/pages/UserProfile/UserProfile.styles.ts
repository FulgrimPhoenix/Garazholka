import { Avatar, Container, ListItemButton, styled } from "@mui/material";

export const UserProfileRoot = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "0 12px",
  },
}));

export const ItemAvatar = styled(Avatar)({
  width: "48px",
  height: "48px",
  borderRadius: "8px",
});

export const ListItem = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "12px",
  padding: "8px",
  paddingLeft: "12px",
  backgroundColor: theme.palette.background.paper,
  transition: "box-shadow 0.2s linear",
  margin: "0 auto 8px",
  height: "64px",
  width: "97%",
  ":hover": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
}));
