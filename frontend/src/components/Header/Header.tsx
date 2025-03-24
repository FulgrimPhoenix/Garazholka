import { Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderRoot, PageTitle } from "./Header.styles";

const Header = () => {
  return (
    <HeaderRoot position="relative">
      <Toolbar>
        <PageTitle as="h2">Профиль</PageTitle>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <Badge color="error">
            <MenuIcon fontSize="large" />
          </Badge>
        </IconButton>
      </Toolbar>
    </HeaderRoot>
  );
};

export default Header;
