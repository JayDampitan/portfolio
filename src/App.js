import Navbar from "./components/Navbar";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import GradientLine from "./components/GradientLine";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Navbar />
        <GradientLine/>
    </div>
  );
}

export default App;
