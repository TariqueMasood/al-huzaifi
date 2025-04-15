import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ThemeProvider } from "./contexts/theme-context";
import GlobalStyles from "./styles/global-styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/auth-context";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
