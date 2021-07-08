import React from "react";
import { createGlobalStyle } from "styled-components";
import Section1 from './Components/Section1/Section1'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Apple SD Gothic Neo', sans-serif;
    background: rgb(107,64,255);
    background: linear-gradient(270deg, rgba(107,64,255,1) 0%, rgba(31,26,255,0.6825105042016807) 35%, rgba(128,153,253,1) 100%);
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