import { styled, TextField } from "@mui/material";

export const CustomInput = styled(TextField)(({ theme }) => ({
  margin: "0 auto 12px",
  width: "100%",
  "& input": {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "12px",
  },
  "& .MuiInputBase-root": {
    borderRadius: "12px",
  },
}));
