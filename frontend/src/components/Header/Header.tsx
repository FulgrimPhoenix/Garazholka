import { Badge, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderRoot, HeaderToolbar, PageTitle } from "./Header.styles";

const Header = () => {
  return (
    <HeaderRoot position="relative">
      <HeaderToolbar>
        <PageTitle as="h2">Профиль</PageTitle>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <Badge color="error">
            <MenuIcon fontSize="large" />
          </Badge>
        </IconButton>
      </HeaderToolbar>
    </HeaderRoot>
  );
};

export default Header;
