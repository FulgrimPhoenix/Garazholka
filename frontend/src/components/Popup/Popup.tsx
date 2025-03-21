import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { PopupRoot } from "./Popup.styles";

interface IPopup {
  title: string;
  children?: ReactNode;
  onClose: () => void;
}

const Popup: FC<IPopup> = ({ title, children, onClose }) => {
  const currentTheme = useTheme();

  return (
    <PopupRoot open onClose={onClose}>
      <DialogTitle variant="h4">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{ color: currentTheme.palette.text.primary }}
          variant="text"
        >
          Закрыть
        </Button>
        <Button
          sx={{ color: currentTheme.palette.text.primary }}
          variant="contained"
        >
          Сохранить
        </Button>
      </DialogActions>
    </PopupRoot>
  );
};

export default Popup;
