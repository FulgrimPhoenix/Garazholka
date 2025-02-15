import { styled, TextField } from "@mui/material";

export const CustomInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginBottom: "12px",
  width: "100%",
  borderRadius: "12px",
  "& .MuiInputBase-root": {
    borderRadius: "12px",
  },
}));
