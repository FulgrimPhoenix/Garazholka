import { Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children?: ReactNode; // Добавляем children
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
