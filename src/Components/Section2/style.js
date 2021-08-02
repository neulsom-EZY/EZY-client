import styled from 'styled-components';
import Bg02 from '../../Assets/Bg02.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: -100;
    background-position: center;
    background-size: cover;
    background-image: url(${Bg02});
    @media screen and (max-width: 900px) {
        display: flex;
        justify-items: center;
        flex-direction: column;
        text-align: center;
    }
`;
export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 8vh;
    margin-left: 16vh;
`;
export const SubTitle = styled.div`
    width: 100%;
    margin-top: 3vh;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
`;
export const ImgSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
    margin-right: 15vh;
    .SomeDay {
        width: 330px;
        height: 680px;
    }
    .Alert {
        width: 300px;
        height: 610px;
        margin-right: -3vh;
        margin-top: 15vh;
    }
`;