import { GroupList, Map, ProfileInfoCard } from "@/components/index";
import { CalendarIcon, UserProfileRoot } from "./UserProfile.styles";
import { useUserMeQuery } from "@/store/api/userApi";
import TitledBox from "@/ui/TitledBox/TitledBox";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import * as React from "react";

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
    <UserProfileRoot container>
      <ProfileInfoCard cardParams={data} sm={12} md={12} lg={12} />
      <GroupList size={{ sm: 12, md: 12, lg: 12 }} />
      <TitledBox
        title="Откуда ты?"
        isTitleActive={true}
        onClick={() => console.log("click")}
        xs={5.8}
      >
        <Map />
      </TitledBox>
      <TitledBox
        title="Когда свободен?"
        isTitleActive={true}
        onClick={() => console.log("click")}
        xs={5.8}
      >
        <CalendarIcon />
      </TitledBox>
      <TitledBox
        xs={12}
        title="Мобильность"
        isTitleActive={false}
        onClick={() => console.log("click")}
      >
        <></>
      </TitledBox>
      <span>lol</span>
    </UserProfileRoot>
  );
};

export default UserProfile;
