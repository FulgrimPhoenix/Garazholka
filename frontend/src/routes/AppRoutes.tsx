import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Login, Register } from "../pages";
import { Layout } from "../pages/Layout/Layout";
import { Profile } from "../pages/Profile/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
};
