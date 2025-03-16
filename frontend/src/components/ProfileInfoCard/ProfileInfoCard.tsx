import { ContainerProps, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  ProfileInfoCardAvatar,
  ProfileInfoCardDescription,
  ProfileInfoCardRoot,
  ProfileInfoCardSettingButton,
} from "./ProfileInfoCard.style";
import { IUserData } from "@/types/user.types";
import { FC } from "react";

interface IProfileInfoCard extends ContainerProps {
  cardParams: Pick<IUserData, "avatar" | "description" | "name" | "lastName">;
}

const ProfileInfoCard: FC<IProfileInfoCard> = ({ cardParams, ...props }) => {
  return (
    <ProfileInfoCardRoot {...props}>
      <ProfileInfoCardAvatar
        src={cardParams.avatar}
        alt={`${cardParams.name} аватар`}
      />
      <ProfileInfoCardSettingButton>
        <SettingsIcon />
      </ProfileInfoCardSettingButton>
      <ProfileInfoCardDescription>
        <Typography variant="h6" align="center" component="h6" gutterBottom>
          {cardParams.name} {cardParams.lastName}
        </Typography>
        <Typography component="p" align="center">
          {cardParams.description}
        </Typography>
      </ProfileInfoCardDescription>
    </ProfileInfoCardRoot>
  );
};

export default ProfileInfoCard;
