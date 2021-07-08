import styled from 'styled-components';
import Bg01 from '../../Assets/Bg01.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${Bg01});
    z-index:1;
    @media screen and (max-width: 900px) {
        display: flex;
        justify-items: center;
        flex-direction: column;
        text-align: center;
    }
`;
export const TitleSection = styled.div`
    margin: 0 0 20vh 0;
    width: 100%;
    display:grid;
    justify-content:center;
    align-items:center;
    /* 13inch Display */
    /* @media screen and (max-width: 1770px) {
        margin-left:3%;
    } */
    @media screen and (max-width: 1550px) {
        width: 40%;
        margin-left: 8%;
    }
    @media screen and (max-width: 1400px) {
        width: 37%;
        margin-left: 10%;
    }
    @media screen and (max-width: 1350px) {
        /* Reset */
        width: 100%;
        margin-left: 5%;
    }
    @media screen and (max-width: 1300px) {
        /* margin-right: -13vh; */
    }
    @media screen and (max-width: 1280px) {
        margin-left: 1%;
    }
    @media screen and (max-width: 1230px) {
        width: 100%;
        margin: 0 0 20vh 5vh;
    }
    @media screen and (max-width: 1130px) {
        width: 100%;
    }
    @media screen and (max-width: 1070px) {
        margin-left:0.2%;
    }
    @media screen and (max-width: 1066px) {
        margin-left:0.1%;
    }
    @media screen and (max-width: 1055px) {
        margin-left:0.1%;
    }
    @media screen and (max-width: 1040px) {
        margin-left: 1%;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        margin: 0;
    }
    @media screen and (max-width: 700px) {
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
    @media screen and (max-width: 1350px) {
        width:120%;
    }
    @media screen and (max-width: 1010px) {
        width: 130%;
    }
    @media screen and (max-width: 980px) {
        font-size: 35px;
    }
    @media screen and (max-width: 900px) {
        margin-bottom: 4vh;
        margin-top: 10vh;
        font-size: 40px;
    }
    @media screen and (max-width: 760px) {
        font-size: 35px;
        font-weight: bold;
    }
    @media screen and (max-width: 670px) {
        font-size: 30px;
        font-weight: bold;
    }
    @media screen and (max-width: 500px) {
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
    @media screen and (max-width: 1350px) {
        width: 100%;
    }
    @media screen and (max-width: 1230px) {
        width: 100%;
    }
    @media screen and (max-width: 1130px) {
        width: 200%;
        margin-right: 40vh;
    }
    @media screen and (max-width: 900px) {
        margin: 0;
        margin-bottom: 4vh;
        margin-top: 3vh;
        font-size: 20px;
    }
    @media screen and (max-width: 670px) {
        font-size: 17px;
        font-weight: 500;
        margin-top: 3vh;
    }
`;
export const WLogo = styled.div`
    width: 100%;
    height: 23vh;
    margin-left: 3vh;
    @media screen and (max-width: 900px) {
        margin-left: -3vh;
        margin-top: 12vh;
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
    }
    .SubSubPhone {
        display: none;
    }
    .ResponsivePhone {
        display: none;
    }
    /* @media screen and (max-width: 1680px) {} */
    @media screen and (max-width: 1350px) {
        .MainPhone {
            display: none;
        }
        .SubPhone {
            display: block;
        }
    }
    @media screen and (max-width: 1260px) {
        .SubPhone {
            margin-right: 5vh;
        }
    }
    @media screen and (max-width: 1230px) {
        .SubPhone {
            display: none;
        }
        .SubSubPhone {
            display: block;
            margin-left: 15vh;
        }
    }
    @media screen and (max-width: 1130px) {
        .SubSubPhone {
            /* margin-left: 5vh; */
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
    @media screen and (max-width: 1040px) {
        .SubSubPhone {
            margin-left: 15vh;
        }
    }
    @media screen and (max-width: 1010px) {
        .SubSubPhone {
            margin-left: 20vh;
        }
    }
    @media screen and (max-width: 980px) {
        .SubSubPhone {
            margin-left: 17vh;
        }
    }
    @media screen and (max-width: 940px) {
        .SubSubPhone {
            margin-left: 15vh;
        }
    }
    @media screen and (max-width: 900px) {
        .SubSubPhone {
            display: none;
        }
    }
`;
export const Img1 = styled.div`
    svg{
        max-width:100%;
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

export const Img3 = styled.div`
    svg{
        max-width:100%;
    }
`;

export const Img4 = styled.div`
    svg{
        max-width:100%;
    }
`;