import { GroupList, ProfileInfoCard } from "@/components/index";
import { UserProfileRoot } from "./UserProfile.styles";
import { useUserMeQuery } from "@/store/api/userApi";

const UserProfile = () => {
  const {
    data = {
      name: "Произошла ошибка...",
      lastName: "",
      avatar: "#",
      description: "Произошла ошибка...",
    },
    isLoading,
  } = useUserMeQuery();

  if (isLoading) return <span>Loading...</span>;

  return (
    <UserProfileRoot>
      <ProfileInfoCard cardParams={data} />
      <GroupList />
      <span>lol</span>
    </UserProfileRoot>
  );
};

export default UserProfile;
