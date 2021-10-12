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
    display: flex;
    align-items:center;
    justify-content:flex-end;
    width: 100%;
    height:100%;
    margin-left: -30vh;
    .Schedule {  
        width: 39.5vh;
        margin-bottom: 25vh;
        margin-left: -15vh;
    }
    .Hand { 
        width: 50vh;
        margin-bottom: -62.5vh;
        z-index: 1;
    }
    @media screen and (max-width: 900px) {
        .Schedule { display: none; }
    }
`;

export const TitleSection = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
    margin-bottom: 30vh;
    .Schedule2{
        display: none;
    }
    @media screen and (max-width: 900px) {
        .Schedule2 {  
            width: 37vh;  
            display: inline;
            margin-left: 2vh;
        }
    }
    @media screen and (max-width: 500px) {
        .Schedule2 {  
            width: 30vh;  
        }
    }
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 75px;
    line-height: 8vh;
    color: black;
    font-weight:bold;
    @media screen and (max-width: 900px) {
        margin: 15vh 0 15vh 0;
    }
    @media screen and (max-width: 500px)
    { font-size: 25px }
`;

export const SubTitle = styled.div`
    width: 100%;
    font-size: 40px;
    font-weight: 400;
    line-height: 6vh;
    color: #656565;
    margin-top: 3vh;
    margin-bottom: 3vh;
    @media screen and (max-width: 900px) {
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
    background-color: #FFFFFF;
    @media screen and (max-width: 900px) {
        display: inline;
        margin-top: 15vh;
        margin-bottom: 0;
    }
    @media screen and (max-width: 500px)
        { font-size: 15px }
`;

export const SubTitle3 = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  line-height: 8vh;
  color: black;
`;

export const IconSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: -11vh;
    @media screen and (max-width: 900px) {
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
    text-align: center;
    vertical-align: baseline;
    font-weight: 400;
    font-size: 20px;
    margin-right: 1vh; 
    margin-bottom: 3vh;
`;

export const SubSection = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
`;