import { Collapse, List, ListProps } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { DropDownListRoot } from "./DropDownList.styles";
import MainButton from "../MainButton/MainButton";

interface IDropDownList extends ListProps {
  title: string;
  children?: ReactNode[];
}

const DropDownList: FC<IDropDownList> = ({ title, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpenList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DropDownListRoot>
      <MainButton
        onClick={toggleIsOpenList}
        title={title}
        functionType="dropDown"
        variant="contained"
        isOpen={isOpen}
        buttonColor="secondary"
      />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ maxHeight: "505px", overflow: "auto" }}
          {...props}
        >
          {children}
        </List>
      </Collapse>
    </DropDownListRoot>
  );
};

export default DropDownList;
