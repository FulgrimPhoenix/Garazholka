import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.component} // Используем component как element
        >
          {route.children &&
            route.children.map((childRoute, idx) => (
              <Route
                key={idx}
                path={childRoute.path}
                element={childRoute.component} // Рендерим вложенные компоненты
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
};
