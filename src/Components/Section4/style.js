import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 150vh;
    z-index: -100;
    display: grid;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
`;

export const TitleSection = styled.div`
    width: 100%;
    word-break: keep-all;
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 44px;
    line-height: 7vh;
    color: black;
`;

export const SubTitle = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 35px;
    font-weight: bold;
    line-height: 6vh;
    color: black;
`;
export const ImgSection = styled.div`
    display:grid;
    align-items:center;
    justify-content:center;
    width: 100%;
    height:100%;
    margin-top: -15vh;
`;

export const FirstSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #BAC8FF;
    width: 100vh;
    height: 47vh;
    border-radius: 6vh;
    .Top { width: 40vh; margin-top: 3.2vh };
`;

export const SecondSection = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vh;
    height: 47vh;
    margin-top: -1vh;
`;

export const SubSection = styled.div`
    width: 75vh;
    height: 102%;
    margin-top: 1vh;
    background-color: #AFADFF;
    border-radius: 6vh;
    .Bottom { width: 40vh; margin-left: 19vh };
`;

export const SubSection2 = styled.div`
    width: 25vh;
    height: 100%;
    margin-left: 4vh;
`;

export const SubSection3 = styled.div`
    display:grid;
    width: 100%;
    height: 70%;
    background-color: #FFB5B5;
    border-radius: 6vh;
    margin-bottom: 1vh;
`;

export const Emoji = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 7vh;
`;

export const SubTitle2 = styled.div`
    font-size: 35px;
    font-weight: bold;
    line-height: 4vh;
    color: black;
    float: left;
    margin-left: 3vh;
    margin-top: 3vh;
`;

export const SubTitle3 = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 25px;
    font-weight: bold;
    color: black;
`;

export const SubSection4 = styled.div`
    width: 100%;
    height: 30%;
    background-color: #E2F6D7;
    border-radius: 4vh;
`;