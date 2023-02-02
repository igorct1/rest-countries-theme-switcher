import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStorage } from "./contexts/GlobalContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { lightTheme } from "./styles/themes/light";
export const App = () => {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme((state) => !state);
  }

  return (
    <ThemeProvider theme={theme ? defaultTheme : lightTheme}>
      <GlobalStorage toggleTheme={toggleTheme} theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </GlobalStorage>
    </ThemeProvider>
  );
};
