import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";

import GradientLine from "./components/Gradient/GradientLine";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Media from "./components/Media/Media";
import { lightMode, darkMode } from "./components/Theme";

function App() {
  const [switchActive, setSwitchActive] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={switchActive ? lightMode : darkMode}>
          <GlobalStyle />
          <Media
            switchActive={switchActive}
            setSwitchActive={setSwitchActive}
          />
          <GradientLine />
          <AnimatedRoutes />
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
