import styled from 'styled-components';
import M_Bg from "../../Assets/MobileBg.svg";

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1;
    @media screen and (max-width: 900px) {
        display: flex;
        justify-items: center;
        flex-direction: column;
        text-align: center;
        background-image: url(${M_Bg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        .M-Bg {
            margin-top: -10vh;
        }
    }
`;
export const TitleSection = styled.div`
    width: 100%;
    display:grid;
    justify-content:center;
    align-items:center;
    .W-Logo {
        margin-bottom: 5vh;
        margin-left: -1vh;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
    }
    .StoreBtn {
        width: 22vh;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        margin-bottom: 3vh;
    }
    @media screen and (max-width: 1550px) {
        width: 100%;
    }
    @media screen and (max-width: 1450px) {
        width: 100%;
        margin-left: 5%;
    }
    @media screen and (max-width: 1280px) {
        margin-left: 1%;
    }
    @media screen and (max-width: 1230px) {
        margin: 10vh;
    }
    @media screen and (max-width: 1150px) {
        word-break: keep-all;
        margin-left: 5%;
    }
    @media screen and (max-width: 1115px) {
        word-break: keep-all;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 3vh;
        .StoreBtn {
            display: block;
            width: 18vh;
            margin-top: 2vh;
        }
        .W-Logo {
            display: none;
        }
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        .StoreBtn {
            width: 20vh;
        }
    }
`;
export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 7.5vh;
    background: #6B40FF;
    background: -webkit-linear-gradient(to right, #6B40FF 0%, #1F1AFF 50%, #8099FD 100%);
    background: -moz-linear-gradient(to right, #6B40FF 0%, #1F1AFF 50%, #8099FD 100%);
    background: linear-gradient(to right, #6B40FF 0%, #1F1AFF 50%, #8099FD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 70%;
    @media screen and (max-width: 1350px) {
        width:120%;
    }
    @media screen and (max-width: 1040px) {
        width: 130%;
    }
    @media screen and (max-width: 1010px) {
        width: 130%;
        font-size: 42px;
    }
    @media screen and (max-width: 980px) {
        font-size: 40px;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: 17px;
        line-height: 3vh;
    }
`;
export const SubTitle = styled.div`
    width: 100%;
    margin-top: 3vh;
    margin-bottom: 5vh;
    font-size: 22px;
    font-weight: 400;
    line-height: 3.9vh;
    color: #6A6A6A;
    @media screen and (max-width: 1350px) {
        width: 100%;
    }
    @media screen and (max-width: 1230px) {
        width: 100%;
    }
    @media screen and (max-width: 1130px) {
        width: 95%;
        margin-right: 40vh;
    }
    @media screen and (max-width: 1071px) {
        width: 100%;
    }
    @media screen and (max-width: 1070px) {
        width: 100%;
    }
    @media screen and (max-width: 1020px) {
        width: 110%;
    }
    @media screen and (max-width: 1016px) {
        width: 110%;
    }
    @media screen and (max-width: 985px) {
        width: 110%;
    }
    @media screen and (max-width: 930px) {
        width: 120%;
    }
    @media screen and (max-width: 900px) {
        width: 80%;
        margin: 0;
        margin-top: 5.5vh;
        margin-bottom: 2.5vh;
        font-size: 12px;
        font-weight: lighter;
        background: #6B40FF;
        background: -webkit-linear-gradient(to right, #6B40FF 0%, #1F1AFF 50%, #8099FD 100%);
        background: -moz-linear-gradient(to right, #6B40FF 0%, #1F1AFF 50%, #8099FD 100%);
        background: linear-gradient(to right, #6B40FF 0%, #1F1AFF 50%, #8099FD 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        opacity: 100%;
    }
    @media screen and (max-width: 500px) {
        font-size: 12px;
        line-height: 3vh;
    }
`;
export const WLogo = styled.div`
    width: 100%;
    height: 23vh;
    margin-left: 3vh;
    @media screen and (max-width: 900px) {
        width: 66vh;
        margin: 0;
        margin-left: -1vh;
        margin-top: 6vh;
    }
    @media screen and (max-width: 500px) {
        width: 67vh;
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
    .W-Phone {
        z-index: 100;
        width: 90vh;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
    }
    .SubPhone {
        display: none;
    }
    .P2 {
        display: none;
    }
    @media screen and (max-width: 1450px) {
        .W-Phone {
            display: none;
        }
        .SubPhone {
            display: block;
            margin-right: -40vh;
        }
    }
    @media screen and (max-width: 1230px) {
        .SubPhone {
            display: none;
        }
        .P2 {
            display: block;
            margin: 0;
            margin-left: 13vh;
        }
    }
    @media screen and (max-width: 1050px) {
        .P2 {
            margin-left: 3vh;
        }
    }
    @media screen and (max-width: 940px) {
        .P2 {
            margin-left: -1vh;
        }
    }
    @media screen and (max-width: 900px) {
        .P2 {
            display: none;
        }
    }
`;
export const Img1 = styled.div`
    svg{
        max-width:100%;
    }
`;
export const Img2 = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    margin-left: 2.4vh;
    width: 21vh;
    height: 7vh;
    background: none;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 900px) {
        display: none;
    }
`;
export const MobileSection = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: top;
    flex-direction: column;
    text-align: center;
    margin-top: 15vh;
    display: none;
    @media screen and (max-width: 900px) {
        display: block;
    }
`;
export const MobileLogoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -8vh;
    margin-bottom: 3vh;
    .M-Logo {
        display: block;
        width: 10vh;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
    }
`;
export const MobileImgSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .M-Phone {
        width: 31vh;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
    }
`;
