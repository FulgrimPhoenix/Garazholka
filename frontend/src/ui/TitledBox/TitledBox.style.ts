import { Button, Grid, styled, Typography } from "@mui/material";

export const TitledBoxRoot = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  padding: "12px 8px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}));

export const TitleButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  color: theme.palette.text.primary,
  fontSize: "14px",
  fontWeight: "500",
  marginBottom: "14px",
  padding: "0 0 0 4px",
  textAlign: "left",
  "&:hover": {
    backgroundColor: "none",
    outline: "none",
  },
}));

export const TitleStatic = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  color: theme.palette.text.primary,
  margin: "0",
  marginBottom: "14px",
  padding: "0 0 0 4px",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "500",
  textTransform: "uppercase",
}));
