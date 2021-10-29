import React from "react";
import { createGlobalStyle } from "styled-components";
import * as C from './Components/index';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Noto Sans CJK KR', sans-serif;
    background-color: #F9FAFB;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const App = () => {
  return (
      <>
        <GlobalStyle />
        <C.Section1/>
        <C.Section1_5/>
        <C.Section2/>
        <C.Section3/>
        <C.Section3_5/>
        <C.Section4/>
        <C.Section5/>
        <C.Footer/>
      </>
  );
};

export default App;