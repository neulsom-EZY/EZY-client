import styled from 'styled-components';
import Bg02 from '../../Assets/Bg02.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    z-index: -100;
    background-position: center;
    background-size: cover;
    background-image: url(${Bg02});

    /* display: flex;
    justify-content: center;
    align-items: center; */

    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`;
export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 16vh;
    word-break: keep-all;
    @media screen and (max-width: 1200px) {
        margin-left: 3vh;
    }
    @media screen and (max-width: 900px) {
        margin-top: -4vh;
        margin-bottom: -5vh;
        margin-left: 0;
    }
`;
export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 8vh;
    @media screen and (max-width: 900px) {
        font-size: 28px;
    }
`;
export const SubTitle = styled.div`
    width: 100%;
    margin-top: 3vh;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    @media screen and (max-width: 900px) {
        display: none;
    }
`;
export const SubTitle2 = styled.div`
    width: 100%;
    height: 10vh;
    display: none;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    @media screen and (max-width: 900px) {
        display: block;
        font-size: 17px;
    }
`;
export const ImgSection = styled.div`
    width: 100%;
    margin-bottom: 3vh;
    margin-right: 15vh;
    .W-SomeDay {
        width: 330px;
        height: 680px;
    }
    .W-Alert {
        width: 300px;
        height: 610px;
        margin-right: -3vh;
        margin-top: 15vh;
    }
    @media screen and (max-width: 1300px) {
        margin-right: 10vh;
    }
    @media screen and (max-width: 1200px) {
        margin-right: 1vh;
    }
    @media screen and (max-width: 980px) {
        .W-SomeDay {
            width: 280px;
        }
        .W-Alert {
            width: 250px;
        }
    }
    @media screen and (max-width: 500px) {
    }
`;