import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 120vh;
    z-index: -100;
    display: grid;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
`;

export const TitleSection = styled.div`
    width: 65vw;
    word-break: keep-all;
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 44px;
    line-height: 6vh;
    color: black;
`;

export const ReviewSection = styled.div`
    width: 100%;
    height:100%;
    margin-top: 20vh;
    display: grid;
    justify-content:center;
    align-items:center;
`;

export const BgCircle = styled.div`
    width: 50vh;
    height: 50vh;
    position: relative;
    bottom: 120vh;
    border-radius: 50%;
    background-color: #AFADFF;
`;

export const Review1 = styled.div`
    width: 40vh;
    height: 22vh;
    position: relative;
    top: 1vh;
    right: 13vh;
    background-color: white;
    box-shadow: 1vh 1vh 4vh #adb5bd;
    z-index: 3;
`;

export const Review2 = styled.div`
    width: 43vh;
    height: 25vh;
    position: relative;
    bottom: 13vh;
    left: 35vh;
    background-color: white;
    box-shadow: 1vh 1vh 4vh #adb5bd;
    z-index: 1;
`;

export const Review3 = styled.div`
    width: 45vh;
    height: 25vh;
    position: relative;
    bottom: 35vh;
    right: 35vh;
    background-color: white;
    box-shadow: 1vh 0.1vh 4vh #adb5bd;
    z-index: 2;
`;

export const Review4 = styled.div`
    width: 45vh;
    height: 26vh;
    position: relative;
    bottom: 40vh;
    right: 15vh;
    background-color: white;
    box-shadow: 1vh 1vh 4vh #adb5bd;
    z-index: 1;
`;

export const Review5 = styled.div`
    width: 40vh;
    height: 22vh;
    position: relative;
    bottom: 55vh;
    left: 20vh;
    background-color: white;
    box-shadow: 1vh 1vh 4vh #adb5bd;
    z-index: 2;
`;

export const ReviewTitle = styled.div`
    width: 100%;
    margin: 3vh 0 0 3vh;
    font-size: 20px;
    font-weight: Medium;
    color: black;
    z-index: 3;
`;

export const ReviewBtn1 = styled.button`
    width: 11vh;
    height: 3vh;
    margin: 9vh 0 0 3vh;
    background-color: #BAC8FF;
    border-radius: 5vh;
    border: 0;
    outline: 0;
`;

export const ReviewBtn2 = styled.button`
    width: 11vh;
    height: 3vh;
    margin: 12vh 0 0 3vh;
    background-color: #E2F6D7;
    border-radius: 5vh;
    border: 0;
    outline: 0;
`;

export const ReviewBtn3 = styled.button`
    width: 11vh;
    height: 3vh;
    margin: 10vh 0 0 3vh;
    background-color: #FFB5B5;
    border-radius: 5vh;
    border: 0;
    outline: 0;
`;

export const ReviewBtn4 = styled.button`
    width: 11vh;
    height: 3vh;
    margin: 13vh 0 0 3vh;
    background-color: #BAC8FF;
    border-radius: 5vh;
    border: 0;
    outline: 0;
`;

export const BtnTitle = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: 500;
`;