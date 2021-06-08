import React from "react";
import { createGlobalStyle } from "styled-components";
import Section1 from "./Components/Section1/Section1";
import bg01 from "../src/Assets/bg01.png"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-image: url(${bg01});
        background-repeat: no-repeat;
        background-color: #ab92ff;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Section1 />
    </>
  );
};

export default App;
