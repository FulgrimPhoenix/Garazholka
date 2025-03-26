import { GridProps, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  ProfileInfoCardAvatar,
  ProfileInfoCardDescription,
  ProfileInfoCardRoot,
  ProfileInfoCardSettingButton,
} from "./ProfileInfoCard.styles";
import { FC } from "react";
import { useModalContext } from "@/hooks/usePopup";
import { UserEditPopup } from "@/components";
import { IUserData } from "@/types/user.types";

interface IProfileInfoCard extends GridProps {
  cardParams: Pick<
    IUserData,
    "avatar" | "description" | "first_name" | "last_name"
  >;
}

const ProfileInfoCard: FC<IProfileInfoCard> = ({ cardParams, ...props }) => {
  const { open } = useModalContext();

  const openPopup = () => {
    open(({ close }) => (
      <UserEditPopup
        onClose={close}
        title="Редактировать профиль"
      ></UserEditPopup>
    ));
  };

  return (
    <ProfileInfoCardRoot item xs={12} {...props}>
      <ProfileInfoCardAvatar
        src={cardParams.avatar}
        alt={`${cardParams.first_name} аватар`}
      />
      <ProfileInfoCardSettingButton onClick={openPopup}>
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
