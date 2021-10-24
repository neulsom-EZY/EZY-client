import styled from "styled-components";

export const MainSection = styled.div`
  height: 70vh;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const TitleSection = styled.div`
`;

export const MainTitle = styled.div`
    font-size: 50px;
    background: linear-gradient(to left ,#6B40FF , #A397FF, #8099FF, #6355CE);
    /* background: linear-gradient(to right, #6B40FF , #1F1AFF , #221EFF ,#8099FF ); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`;

export const ImgSection = styled.div`
    padding-top: 100px;
    img {
        display: block;
        margin: 0 auto;
        cursor: pointer;
    }
`;

export const SubSection = styled.div`
    height: 20vh;
    color: black;
    font-size: 35px;
    font-weight: 500;
    line-height: 8vh;
    `;

export const Line = styled.div`
    height: 3px;
    background: linear-gradient(90deg, rgba(107, 64, 255, 0.5) 0%, rgba(31, 26, 255, 0.5) 49.48%, rgba(34, 30, 255, 0.5) 49.49%, rgba(128, 153, 255, 0.5) 100%);
`;

export const LineText = styled.div`
    font-size: 20px;
    background: linear-gradient(to right, #6B40FF 70%, #1F1AFF 70%, #221EFF 70%,#8099FF 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 36px;
    margin-left: 515px;
    margin-top: 50px;
`;

