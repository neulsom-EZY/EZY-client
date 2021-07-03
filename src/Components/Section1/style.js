import styled from 'styled-components';
import Bg01 from '../../Assets/Bg01.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${Bg01});
    z-index:1;
`;
export const TitleSection = styled.div`
    width: 100%;
    display:grid;
    justify-content:center;
    align-items:center;
    /* 13inch Display */
    @media screen and (max-width: 1680px) {
        margin-left: 13vh;
    }
    @media screen and (max-width: 1500px) {
        width: 70vh;
    }
    @media screen and (max-width: 1380px) {
        margin-left: 10vh;
    }
`;
export const MainTitle = styled.div`
    width: 100%;
    font-weight: 500;
    font-size: 40px;
    /* 13inch Display */
    @media screen and (max-width: 1680px) {
        width: 80vh;
    }
    @media screen and (max-width: 1380px) {
        width: 70vh;
    }
`;
export const SubTitle = styled.div`
    width: 100%;
    margin-left: 3vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    font-size: 20px;
    font-weight: 400;
    line-height: 5vh;
`;
export const WLogo = styled.div`
    width: 100%;
    height: 11vh;
    margin-top: -40vh;
    margin-left: 3vh;
`;
export const MainBg = styled.div`
    width: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    .SubPhone {
        display: none;
        margin-right: -50vh;
    }
    .SubSubPhone {
        display: none;
    }
    .ResponsivePhone {
        display: none;
    }
    @media screen and (max-width: 1680px) {
        .MainPhone {
            /* margin-left: -10vh; */
        }
    }
    @media screen and (max-width: 1500px) {
        .MainPhone {
            display: none;
        }
        .SubPhone {
            display: block;
            margin-right: 20vh;
        }
    }
    @media screen and (max-width: 1430px) {
        margin-right: 5vh;
    }
    @media screen and (max-width: 1380px) {
        .SubPhone {
            display: none;
        }
        .SubSubPhone {
            display: block;
            margin-left: 7vh;
        }
    }
`;
export const Img2 = styled.div`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    margin-left: 3vh;
`;