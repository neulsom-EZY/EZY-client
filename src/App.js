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
`;

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <GlobalStyle />
      <C.Section1_5/>
    </>
=======
      <>
        <GlobalStyle />
        <C.Section1/>
        {/*<C.Section2/>*/}
        {/*<C.Section3/>*/}
        {/*<C.Section4/>*/}
      </>
>>>>>>> 83d6c40cf1c33af53256921501de3aaf149995c0
  );
};

export default App;