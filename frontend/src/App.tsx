import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme.ts";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
