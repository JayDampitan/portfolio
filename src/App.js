import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import GradientLine from "./components/GradientLine";

// Components import
import Header from "./components/Header";
import Media from "./components/Media";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
      <Navbar />
      <GradientLine />
      <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path = '/test' element = {
          <h2>Test</h2>
        }/>
      </Routes>
      <Media />
      <GradientLine />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
