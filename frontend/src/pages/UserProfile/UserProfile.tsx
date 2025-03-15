import { ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { ProfileInfoCard } from "@/components/index";
import { ItemAvatar, ListItem, UserProfileRoot } from "./UserProfile.styles";
import { testGroups } from "./UserProfile.const";
import { MainButton, DropDownList } from "@/ui";
// import { useUserMeQuery } from "src/store/api/userApi";

const UserProfile = () => {
  // const { data, isLoading } = useUserMeQuery();
  // console.log(data);

  return (
    <UserProfileRoot>
      <ProfileInfoCard />
      <DropDownList title="Мои группы">
        {testGroups.map((el, i) => (
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
                    {el.followers} участников
                  </Typography>
                }
              />
            </ListItem>
            {i === 3 ||
            (testGroups.length < 3 && i === testGroups.length - 1) ? (
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
      <span>lol</span>
    </UserProfileRoot>
  );
};

export default UserProfile;
