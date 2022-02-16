import Navbar from "./components/Navbar";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import GradientLine from "./components/GradientLine";
import Header from "./components/Header";
import Media from "./components/Media";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Navbar />
      <GradientLine/>
        
        <Header/>
      <GradientLine/>
    </div>
  );
}

export default App;
