import { ReactNode } from "react";
import { Intro } from "../components/Intro/Intro";
import ProtectedRoute from "./ProtectedRoute";
import { Register } from "../pages/Auth/Register/Register";

interface Iroutes {
  path: string;
  component: ReactNode;
  children?: {
    path: string;
    component: ReactNode;
  }[];
}

export const routes: Iroutes[] = [
  {
    path: "/",
    component: (
      <ProtectedRoute component={Intro} isAuthenticated={true}></ProtectedRoute>
    ),
    children: [
      {
        path: "/child-path", // пример вложенного маршрута
        component: <div>Дочерняя страница</div>,
      },
    ],
  },
  { path: "/signup", component: <Register /> },
];
