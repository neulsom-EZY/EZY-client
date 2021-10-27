import React from "react";
import { createGlobalStyle } from "styled-components";
import * as C from './Components/index';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Apple SD Gothic Neo', sans-serif;
    background-color: #F9FAFB;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
        <C.Section1/>
        <C.Section2/>
        <C.Section3/>
        <C.Section4/>
        <C.Section5/>
        <C.Section6/>
    </>
  );
};

export default App;