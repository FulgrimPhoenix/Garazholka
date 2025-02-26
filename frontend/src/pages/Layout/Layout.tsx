import { Box } from "@mui/material";
import { FC } from "react";
import { LayoutRoot } from "./Layout.styles";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";

export const Layout: FC = () => {
  return (
    <LayoutRoot>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 0, display: "flex" }}>
        <Outlet />
      </Box>
    </LayoutRoot>
  );
};
