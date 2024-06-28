import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./contexts/theme-context";
import GlobalStyles from "./styles/global-styles";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
