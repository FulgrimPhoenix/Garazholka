import { Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";

interface ProtectedRouteProps {
  component: FC<{ children?: ReactNode }>;
  isAuthenticated: boolean;
  children?: ReactNode; // Добавляем children
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? (
    <Component>{children}</Component>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
