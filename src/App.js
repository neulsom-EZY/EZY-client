import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
        margin: 0;
        padding: 0;
        color: white;
        background-color: #ab92ff;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default App;