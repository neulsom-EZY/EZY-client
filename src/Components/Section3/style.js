import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    z-index: -100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 140vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`;

export const ImgSection = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height:100%;
    margin-top: 12vh;
    margin-right: -15vh;
    margin-left: 30vh;
    .Schedule {  width: 39vh;  }
    @media screen and (max-width: 700px) {
        .Schedule { display: none; }
    }
`;

export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    word-break: keep-all;
    .Schedule2{
        display: none;
    }
    @media screen and (max-width: 700px) {
        .Schedule2 {  
            width: 37vh;  
            display: inline;
            margin-left: 2vh;
        }
    }
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 8vh;
    color: black;
    font-weight:bold;
    @media screen and (max-width: 700px) {
        margin: 15vh 0 15vh 0;
    }
`;

export const SubTitle = styled.div`
    width: 100%;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    color: #656565;
    margin-top: 3vh;
    margin-bottom: 12vh;
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const SubTitle2 = styled.div`
    width: 100%;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    color: #656565;
    margin-top: 3vh;
    margin-bottom: 12vh;
    display: none;
    @media screen and (max-width: 700px) {
        display: inline;
        margin-top: 15vh;
        margin-bottom: 0;
    }
`;

export const IconSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: -11vh;
    @media screen and (max-width: 700px) {
        width: 40%;
        margin: 10vh 0 -5vh 0;
    }
`;

export const IconTextSection = styled.div`
    width: 100%;
    color: #656565;
    display: flex;
    justify-content: left;
    align-items: center;
    .Icon1, .Icon2, .Icon3
    { margin-right: 1vh; }
`;