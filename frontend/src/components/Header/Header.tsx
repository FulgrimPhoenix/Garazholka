import { Badge, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderRoot, HeaderToolbar, PageTitle } from "./Header.styles";
import Menu from "../Menu/Menu";
import { MENU_LIST } from "./Header.consts";
import { useState } from "react";
import { useUrlPathName } from "@/hooks/useUrlPathName";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPage = useUrlPathName();

  const togglePopup = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(currentPage);

  return (
    <HeaderRoot position="relative">
      <HeaderToolbar>
        <PageTitle as="h2">Профиль</PageTitle>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={togglePopup}>
          <Badge color="error">
            <MenuIcon fontSize="large" />
          </Badge>
        </IconButton>
      </HeaderToolbar>
      <Menu isOpen={isMenuOpen} toggleMenu={togglePopup} menuList={MENU_LIST} />
    </HeaderRoot>
  );
};

export default Header;
