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
    margin-right: -20vh;
    margin-left: 20vh;
    .Schedule {  width: 39vh;  }
`;

export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    word-break: keep-all;
    @media screen and (max-width: 1680px) 
    {  margin-left: 5vh; }
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 8vh;
    color: black;
    font-weight:bold;
`;

export const SubTitle = styled.div`
    width: 100%;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    color: #656565;
    margin-top: 3vh;
    margin-bottom: 12vh;
`;

export const IconSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: -11vh;
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

export const IconWrapper = styled.div`
    svg {  margin-right: 2vh;  }
`;