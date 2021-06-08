import React from "react";
import { createGlobalStyle } from "styled-components";
import Section1 from "./Components/Section1/Section1";
import bg01 from "../src/Assets/bg01.png"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        /* padding-top : calc ( 1080 / 1920 * 100 %); */
        background-image: url(${bg01});
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat; // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
        background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
        background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다. 
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
