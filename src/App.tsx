import { BrowserRouter } from "react-router-dom";


import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";

export const  App = () => {
  return (
  <AppThemeProvider> 
    <BrowserRouter> 


      <AppRoutes />
      <MenuLateral />
    
    </BrowserRouter>
  </AppThemeProvider>         
  );
}


