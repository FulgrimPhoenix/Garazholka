import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { Input } from "@/ui";

interface IUserEditPopup {
  title: string;
  onClose: () => void;
}

const ContentPopup: FC<IUserEditPopup> = ({ title, onClose }) => {
  const currentTheme = useTheme();

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
            type="submit"
          >
            Сохранить
          </Button>
        </DialogActions>
      </form>
    </PopupRoot>
  );
};

export default ContentPopup;
