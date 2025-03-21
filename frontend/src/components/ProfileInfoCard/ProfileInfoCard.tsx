import { GridProps, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  ProfileInfoCardAvatar,
  ProfileInfoCardDescription,
  ProfileInfoCardRoot,
  ProfileInfoCardSettingButton,
} from "./ProfileInfoCard.styles";
import { FC } from "react";
import { Input } from "@/ui";
import { useFormik } from "formik";
import { INPUT_LIST, TCardParams } from "./ProfileInfoCard.consts";
import { validationSchema } from "./ProfileInfoCard.validation";
import { useModalContext } from "@/hooks/usePopup";
import Popup from "../Popup/Popup";

interface IProfileInfoCard extends GridProps {
  cardParams: TCardParams;
}

const initialValues: TCardParams = {
  avatar: "",
  description: "",
  first_name: "",
  last_name: "",
};

const ProfileInfoCard: FC<IProfileInfoCard> = ({ cardParams, ...props }) => {
  const formik = useFormik<TCardParams>({
    initialValues,
    validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const { open } = useModalContext();

  const openPopup = () => {
    open(({ close }) => (
      <Popup onClose={close} title="Редактировать профиль">
        <form>
          {INPUT_LIST.map((el) => (
            <Input
              type={el.type}
              placeholder={el.helperText}
              key={el.name}
              name={el.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[el.name]}
              required={el.required}
              error={formik.errors[el.name]}
              touched={formik.touched[el.name]}
            />
          ))}
        </form>
      </Popup>
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
