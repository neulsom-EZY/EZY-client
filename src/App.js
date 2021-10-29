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
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 3s ease infinite;
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
        {/*<C.Section2/>*/}
        {/*<C.Section3/>*/}
        {/*<C.Section4/>*/}


        <C.Footer/>
      </>
  );
};

export default App;