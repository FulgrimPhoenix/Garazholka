import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IMenu
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  toggleMenu: () => void;
  menuList: { title: string; href: string }[];
}

const CustomMenu: FC<IMenu> = ({ isOpen, toggleMenu, menuList }) => {
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    toggleMenu();
  };

  const handleNavigate = (href: string) => () => {
    navigate(href);
    toggleMenu();
  };

  useEffect(() => {
    // setIsOpen(true);
  }, []);

  return (
    <Drawer anchor="top" open={isOpen} onClose={handleCloseMenu}>
      <List>
        {menuList.map((el) => (
          <ListItem onClick={handleNavigate(el.href)} key={el.title}>
            <ListItemText primary={el.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default CustomMenu;
