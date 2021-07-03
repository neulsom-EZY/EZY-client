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
    @media screen and (max-width: 1430px) {
        width: 65vh;
    }
    @media screen and (max-width: 1400px) {
        width: 70vh;
        margin-right: -10vh;
    }
    @media screen and (max-width: 1340px) {
        width: 65vh;
    }
    @media screen and (max-width: 1300px) {
        width: 63vh;
        margin-right: -13vh;
    }
    @media screen and (max-width: 1260px) {
        margin-left: 10vh;
    }
    @media screen and (max-width: 1230px) {
        width: 100%;
    }
    @media screen and (max-width: 1160px) {
        width: 80%;
    }
    @media screen and (max-width: 1070px) {
        width: 100%;
        margin-left: 5vh;
    }
    @media screen and (max-width: 940px) {
        width: 73%;
    }
    @media screen and (max-width: 900px) {
        width: 3000vh;
        margin: 0;
        text-align: center;
    }
    @media screen and (max-width: 700px) {
        width: auto;
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
    @media screen and (max-width: 1050px) {
        font-size: 35px;
    }
    @media screen and (max-width: 900px) {
        margin-bottom: 4vh;
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
    @media screen and (max-width: 1050px) {
        font-size: 19px;
    }
    @media screen and (max-width: 900px) {
        margin: 0;
        margin-bottom: 4vh;
    }
`;
export const WLogo = styled.div`
    width: 100%;
    height: 11vh;
    margin-top: -40vh;
    margin-left: 3vh;
    @media screen and (max-width: 900px) {
        margin-left: -3vh;
    }
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
    @media screen and (max-width: 1230px) {
        .SubPhone {
            display: none;
        }
        .SubSubPhone {
            display: block;
            margin-left: 20vh;
        }
    }
    @media screen and (max-width: 1160px) {
        .SubSubPhone {
            margin-left: 10vh;
        }
    }
    @media screen and (max-width: 1070px) {
        .SubSubPhone {
            margin-left: 12vh;
        }
    }
    @media screen and (max-width: 1050px) {
        .SubSubPhone {
            margin-left: 8vh;
        }
    }
    @media screen and (max-width: 1010px) {
        .SubSubPhone {
            margin-left: 5vh;
        }
    }
    @media screen and (max-width: 980px) {
        .SubSubPhone {
            margin-left: 3vh;
        }
    }
    @media screen and (max-width: 960px) {
        .SubSubPhone {
            margin-left: 0vh;
        }
    }
    @media screen and (max-width: 900px) {
        .SubSubPhone {
            display: none;
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
    @media screen and (max-width: 900px) {
        margin: 0;
    }
`;