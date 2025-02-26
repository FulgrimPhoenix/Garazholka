import { Container } from "@mui/material";
import { ProfileInfoCard } from "../../components/index";
import { UserProfileRoot } from "./UserProfile.styles";

const UserProfile = () => {
  return (
    <UserProfileRoot>
      <ProfileInfoCard />
    </UserProfileRoot>
  );
};

export default UserProfile;
