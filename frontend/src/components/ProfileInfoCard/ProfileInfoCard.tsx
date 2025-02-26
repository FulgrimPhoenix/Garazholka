import { Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  ProfileInfoCardAvatar,
  ProfileInfoCardDescription,
  ProfileInfoCardRoot,
  ProfileInfoCardSettingButton,
} from "./ProfileInfoCard.style";

const ProfileInfoCard = () => {
  return (
    <ProfileInfoCardRoot>
      <ProfileInfoCardAvatar />
      <ProfileInfoCardSettingButton>
        <SettingsIcon />
      </ProfileInfoCardSettingButton>
      <ProfileInfoCardDescription>
        <Typography variant="h6" align="center" component="h6" gutterBottom>
          Райан Гослинг
        </Typography>
        <Typography component="p" align="center">
          Кенодостаточен. Известен по ролям в независимых фильмах и крупных
          студийных проектах разных жанров.
        </Typography>
      </ProfileInfoCardDescription>
    </ProfileInfoCardRoot>
  );
};

export default ProfileInfoCard;
