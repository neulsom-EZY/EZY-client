import styled from "styled-components";

export const MainSection = styled.div`
  height: 100vh;
  display: flex; 
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const TitleSection = styled.div`
    /* background-color: red; */
`;

export const MainTitle = styled.div`
    font-size: 50px;
    background: linear-gradient(to right, #6B40FF , #1F1AFF , #221EFF ,#8099FF );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`;

export const SubSection = styled.div`
    height: 20vh;
    color: black;
    font-size: 35px;
    font-weight: 500;
    line-height: 8vh;
    overflow-x: hidden;

    `;

export const Line = styled.div`
    width: 100vw;
    height: 3px;
    background: linear-gradient(90deg, rgba(107, 64, 255, 0.5) 0%, rgba(31, 26, 255, 0.5) 49.48%, rgba(34, 30, 255, 0.5) 49.49%, rgba(128, 153, 255, 0.5) 100%);
`;

export const LineText = styled.div`
    width: 100vw;
    font-size: 20px;
    background: linear-gradient(to right, #6B40FF 70%, #1F1AFF 70%, #221EFF 70%,#8099FF 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 36px;
    margin-left: 520px;
    margin-top: 50px;
`;