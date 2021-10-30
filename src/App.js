import React from "react";
import {createGlobalStyle} from "styled-components";
import * as C from './Components/index';

const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
  }

  body {
    margin: 0;
    margin-right: -1.7vh;
    padding: 0;
    color: white;
    font-family: 'Noto Sans CJK KR', sans-serif;
    background-color: #F9FAFB;
    overflow-x: hidden;
  }

  img {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
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
        <GlobalStyle/>
        <C.Section1/>
        <C.Section15/>
        <C.Section2/>
        <C.Section3/>
        <C.Section35/>
        <C.Section4/>
        <C.Section5/>
        <C.Section6/>
        <C.Footer/>
      </>
  );
};

export default App;