import React from "react";
import { createGlobalStyle } from "styled-components";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import { FullPage, Slide } from 'react-full-page';

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
      <FullPage duration={1200}>
        <Slide><Section1/></Slide>
        <Slide><Section2/></Slide>
      </FullPage>
    </>
  );
};

export default App;