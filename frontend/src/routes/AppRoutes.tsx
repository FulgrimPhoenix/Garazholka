import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Login } from "../pages";
import { Layout } from "../pages/Layout/Layout";
import { UserProfile } from "../pages/";

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
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      {/* <Route path="/signup" element={<Register />} /> */}
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
};
