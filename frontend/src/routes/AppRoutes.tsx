import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Intro } from "../components/Intro/Intro";
import { Login, Register } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={<ProtectedRoute component={Intro} isAuthenticated={true} />}
      />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
};
