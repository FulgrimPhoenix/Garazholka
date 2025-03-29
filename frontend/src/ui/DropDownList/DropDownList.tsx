import { Collapse, List, ListProps } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { DropDownListRoot } from "./DropDownList.styles";
import MainButton from "../MainButton/MainButton";

interface IDropDownList extends ListProps {
  title: string;
  children?: ReactNode[];
  size?: { sm: number; md: number; lg: number };
}

const DropDownList: FC<IDropDownList> = ({
  title,
  children,
  size,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpenList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DropDownListRoot
      item
      xs={size?.sm}
      sm={size?.sm}
      md={size?.md}
      lg={size?.lg}
    >
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
