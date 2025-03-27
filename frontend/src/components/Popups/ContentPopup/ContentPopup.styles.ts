import { Dialog, styled } from "@mui/material";

export const PopupRoot = styled(Dialog)({
  width: "100%",
  maxWidth: "375px",
  margin: "0 auto",
  padding: "0 12px",

  "& .MuiPaper-root": {
    margin: "0",
    width: "100%",
    boxSizing: "border-box",
  },
});
