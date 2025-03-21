import { GridProps, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  ProfileInfoCardAvatar,
  ProfileInfoCardDescription,
  ProfileInfoCardRoot,
  ProfileInfoCardSettingButton,
} from "./ProfileInfoCard.style";
import { IUserData } from "@/types/user.types";
import { FC } from "react";

interface IProfileInfoCard extends GridProps {
  cardParams: Pick<
    IUserData,
    "avatar" | "description" | "first_name" | "last_name"
  >;
}

const ProfileInfoCard: FC<IProfileInfoCard> = ({ cardParams, ...props }) => {
  return (
    <ProfileInfoCardRoot {...props}>
      <ProfileInfoCardAvatar
        src={cardParams.avatar}
        alt={`${cardParams.first_name} аватар`}
      />
      <ProfileInfoCardSettingButton>
        <SettingsIcon />
      </ProfileInfoCardSettingButton>
      <ProfileInfoCardDescription>
        <Typography variant="h6" align="center" component="h6" gutterBottom>
          {cardParams.first_name} {cardParams.last_name}
        </Typography>
        <Typography component="p" align="center">
          {cardParams.description}
        </Typography>
      </ProfileInfoCardDescription>
    </ProfileInfoCardRoot>
  );
};

export default ProfileInfoCard;
