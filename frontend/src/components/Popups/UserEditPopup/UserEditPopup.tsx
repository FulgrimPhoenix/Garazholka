import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { PopupRoot } from "./UserEditPopup.styles";
import { INPUT_LIST, TCardParams } from "./UserEditPopup.consts";
import { Input } from "@/ui";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IUserEditPopup {
  title: string;
  onClose: () => void;
}

const initialValues: TCardParams = {
  description: "",
  first_name: "",
  last_name: "",
  avatar: null as File | null,
};

const UserEditPopup: FC<IUserEditPopup> = ({ title, onClose }) => {
  const currentTheme = useTheme();
  const formik = useFormik<TCardParams>({
    initialValues,
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "Введите хотя бы 2 символа")
        .max(32, "Длина не может быть больше 16 символов"),
      last_name: Yup.string()
        .min(2, "Введите хотя бы 2 символа")
        .max(32, "Длина не может быть больше 16 символов"),
      describetion: Yup.string().max(12),
      avatar: Yup.mixed()

        .test("fileSize", "Файл слишком большой", (value) => {
          return value instanceof File && value.size <= 5 * 1024 * 1024; // Ограничение 5MB
        })
        .test("fileType", "Разрешены только изображения", (value) => {
          return (
            value instanceof File &&
            ["image/jpeg", "image/png", "image/gif"].includes(
              (value as File).type
            )
          );
        }),
    }),
    onSubmit: () => {
      handleSubmit();
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <PopupRoot open onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle variant="h4">{title}</DialogTitle>
        <DialogContent>
          {INPUT_LIST.map((el) =>
            el.type === "file" ? (
              <></>
            ) : (
              <Input
                type={el.type}
                placeholder={el.helperText}
                key={el.name}
                name={el.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={el.name !== "avatar" ? formik.values[el.name] : ""}
                required={el.required}
                error={formik.errors[el.name]}
                touched={formik.touched[el.name]}
              />
            )
          )}
          <div>
            {/* Скрытый input для выбора файла */}
            <input
              type="file"
              id="upload-file"
              style={{ display: "none" }}
              onChange={(event) => {
                const file = event.target.files?.[0] || null;
                formik.setFieldValue("avatar", file);
              }}
            />
            {/* Кастомная кнопка */}
            <label htmlFor="upload-file">
              <Button variant="contained" component="span">
                Выбрать файл
              </Button>
            </label>
            {/* Отображение названия файла */}
            {formik.values.avatar && (
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Файл: {formik.values.avatar.name}
              </Typography>
            )}{" "}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            sx={{ color: currentTheme.palette.text.primary }}
            variant="text"
          >
            Закрыть
          </Button>
          <Button
            sx={{ color: currentTheme.palette.text.primary }}
            variant="contained"
          >
            Сохранить
          </Button>
        </DialogActions>
      </form>
    </PopupRoot>
  );
};

export default UserEditPopup;
