import { FC } from "react";
import { DropDownList, MainButton } from "@/ui";
import { ItemAvatar, ListItem } from "./GroupList.styles";
import {
  ListItemAvatar,
  ListItemText,
  ListProps,
  Typography,
} from "@mui/material";
import { useGetMyGroupsTagsQuery } from "@/store/api/userApi";
import { IGroupTag } from "@/types/group.types";

interface IGroupList extends ListProps {
  size?: { sm: number; md: number; lg: number };
}

const GroupList: FC<IGroupList> = ({ size, ...props }) => {
  const { data: groupList = [], isLoading } = useGetMyGroupsTagsQuery();

  if (isLoading) return <span>Loading...</span>;

  return (
    <DropDownList title="Мои группы" {...props} size={size}>
      {groupList.map((el: IGroupTag, i: number) => (
        <>
          <ListItem key={el.id}>
            <ListItemAvatar>
              <ItemAvatar
                alt={el.title ? el.title : `Аватар`}
                src={el.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary={el.title}
              sx={{ ml: "8px" }}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {el.members} участников
                </Typography>
              }
            />
          </ListItem>
          {i === 3 || (groupList.length < 3 && i === groupList.length - 1) ? (
            <MainButton
              sx={{ width: "97%" }}
              title="Создать группу"
              functionType="simple"
              buttonColor="primary"
            />
          ) : (
            <></>
          )}
        </>
      ))}
    </DropDownList>
  );
};

export default GroupList;
