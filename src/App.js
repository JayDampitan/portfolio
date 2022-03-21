import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import GradientLine from "./components/Gradient/GradientLine";

// Components import
import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { lightMode, darkMode } from "./components/Theme";

function App() {
  const [switchActive, setSwitchActive] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={switchActive ? lightMode : darkMode}>
          <GlobalStyle />
          <Navbar
            switchActive={switchActive}
            setSwitchActive={setSwitchActive}
          />
          <GradientLine />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<h2>Test</h2>} />
          </Routes>

          <GradientLine />
          <Media />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
