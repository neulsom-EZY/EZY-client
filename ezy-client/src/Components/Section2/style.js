import styled from 'styled-components';

export const MainSection = styled.div `
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TitleSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
`;
export const MainTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-left: -10vh;
    font-size: 32px;
    font-weight: lighter;
    text-shadow: 0px 5px 5px rgba(0,0,0,.25);
    @media only screen and (max-width: 1500px) {
        margin-left: -9vh;
    }
    @media only screen and (max-width: 1180px) {
        margin-left: 5vh;
    }
    @media only screen and (max-width: 935px) {
        font-size: 28px;
    }
    @media only screen and (max-width: 900px) {
        margin-left: 1vh;
    }
    @media only screen and (max-width: 770px) {
        font-size: 24px;
    }
    @media only screen and (max-width: 680px) {
        font-size: 28px;
    }
`;
export const MainBg = styled.div`
    .Bg11 {width: 75vh;margin-left: 25vh;}
    .Bg12 {display: none;}

    @media only screen and (max-width: 1500px) {
        .Bg11 {
            margin-left: 18vh;
        }
    }
    @media only screen and (max-width: 1300px) {
        .Bg11 {
            margin-left: 9vh;
        }
    }
    @media only screen and (max-width: 1180px) {
        .Bg11 {
            display: none;
        }
        .Bg12 {
            display: block;
            width: 40vh;
            margin-left: 4vh;
        }
    }
    @media only screen and (max-width: 935px) {
        .Bg12 {
            width: 37vh;
        }
    }
    @media only screen and (max-width: 790px) {
        .Bg12 {
            width: 35vh;
        }
    }
    @media only screen and (max-width: 770px) {
        .Bg12 {
            width: 33vh;
        }
    }
    @media only screen and (max-width: 700px) {
        .Bg12 {
            width: 30vh;
        }
    }
    @media only screen and (max-width: 680px) {
        .Bg12 {
            display: none;
        }
    }
`;