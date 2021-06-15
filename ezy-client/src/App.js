import React from "react";
import { createGlobalStyle } from "styled-components";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

const GlobalStyle = createGlobalStyle`
  body { 
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: #ab92ff;
    }
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Section1 />
      <Section2 />
    </>
  );
};

export default App;