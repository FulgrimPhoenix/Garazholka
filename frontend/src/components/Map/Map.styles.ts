import { styled } from "@mui/material";

export const MapRoot = styled("div")(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  position: "relative",
}));

export const MapFragment = styled("div")({
  width: "100%",
  aspectRatio: "1/1",
});
