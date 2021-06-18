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
    font-size: 30px;
    font-weight: lighter;
    text-shadow: 0px 5px 5px rgba(0,0,0,.25);
    @media only screen and (max-width: 1100px) {
        font-size: 27px;
    }
    @media only screen and (max-width: 920px) {
        font-size: 25px;
    } 
`;
export const SubTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const MainBg = styled.div`
    .Bg11 {
        width: 75vh;
        margin-left: 25vh;
    } 
    @media only screen and (max-width: 1400px) {
        .Bg11 {
            width: 70vh;
        }
    }
    @media only screen and (max-width: 1300px) {
        .Bg11 {
            margin-left: -1px;
        }
    }
    @media only screen and (max-width: 1100px) {
        .Bg11 {
            width: 60vh;
        }
    }
    @media only screen and (max-width: 920px) {
        .Bg11 {
            width: 55vh;
        }
    } 
`;