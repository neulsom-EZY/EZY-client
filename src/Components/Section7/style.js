import styled from "styled-components";

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleSection = styled.div`
    /* background-color: red; */
`;

export const MainTitle = styled.div`
    font-size: 50px;
    background: linear-gradient(to right, #6B40FF 70%, #1F1AFF 70%, #221EFF 70%,#8099FF 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`;

export const SubSection = styled.div`
    height: 20vh;
    color: black;
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    line-height: 8vh;

`;

export const Line = styled.div`
    width: 100vw;
    height: 3px;
    background: linear-gradient(90deg, rgba(107, 64, 255, 0.5) 0%, rgba(31, 26, 255, 0.5) 49.48%, rgba(34, 30, 255, 0.5) 49.49%, rgba(128, 153, 255, 0.5) 100%);
    /* transform: matrix(0, 1, 1, 0, 0, 0); */
`;