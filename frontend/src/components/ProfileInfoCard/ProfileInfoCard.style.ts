import { Avatar, Box, IconButton, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export const ProfileInfoCardRoot = styled(Grid2)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",

  margin: "60px auto 0",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    padding: "0",
  },
}));

export const ProfileInfoCardAvatar = styled(Avatar)({
  width: "72px",
  height: "72px",
  margin: "0 auto",
  top: "-28px",
});

export const ProfileInfoCardDescription = styled(Box)({
  position: "relative",
  top: "-28px",
  margin: "8px auto 0",
  padding: "0 8px",
});

export const ProfileInfoCardSettingButton = styled(IconButton)({
  position: "absolute",
  right: "8px",
  top: "8px",
  padding: "5px",
});
