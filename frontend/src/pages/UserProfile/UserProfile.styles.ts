import { styled, Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const UserProfileRoot = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: "0 12px",
    gap: "12px 9px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "0 12px",
    gap: "12px 11px",
  },
}));

export const CalendarIcon = styled(CalendarMonthIcon)(({ theme }) => ({
  margin: "auto",
  [theme.breakpoints.up("xs")]: {
    fontSize: "8rem",
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: "9.5rem",
  },
}));
