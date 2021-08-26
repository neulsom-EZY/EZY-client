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
export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 16vh;
    word-break: keep-all;
    @media screen and (max-width: 1500px) {
        width: 60%;
    }
    @media screen and (max-width: 1200px) {
        margin-left: 3vh;
    }
    @media screen and (max-width: 900px) {
        margin-top: -7vh;
        margin-bottom: -4vh;
        margin-left: 0;
    }
`;
export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 8vh;
    color: black;
    @media screen and (max-width: 900px) {
        font-size: 28px;
        line-height: 5vh;
        margin-bottom: 27vh;
        text-align: center;
    }
`;
export const SubTitle = styled.div`
    width: 100%;
    margin-top: 3vh;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    color: #656565;
    @media screen and (max-width: 900px) {
        display: none;
    }
`;
export const SubTitle2 = styled.div`
    width: 100%;
    height: 10vh;
    display: none;
    font-size: 22px;
    font-weight: 600;
    line-height: 5vh;
    color: #656565;
    @media screen and (max-width: 900px) {
        text-align: center;
        display: block;
        font-size: 17px;
        margin-top: 5.5vh;
        margin-bottom: -15vh;
        line-height: 3vh;
    }
`;
export const ImgSection = styled.div`
    width: 100%;
    height:100%;
    margin-bottom: -5vh;
    margin-right: 5vh;
    display:flex;
    align-items:center;
    justify-content:center;
    .Alert {
      margin-right: -3vh;
      margin-bottom: -8vh;
      width: 36vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    .SomeDay {
      width: 39vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    @media screen and (max-width: 1300px) {
        margin-right: 10vh;
    }
    @media screen and (max-width: 1200px) {
        margin-right: 1vh;
    }
    @media screen and (max-width: 1000px) {
        .W-SomeDay {
            width: 280px;
            height: 520px;
        }
        .W-Alert {
            width: 250px;
            height: 450px;
        }
        .W-Alert-Phone {
            width: 280px;
            height: 520px;
        }
    }
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 2vh;
        margin-bottom: 10vh;
    }
    @media screen and (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        margin-right: -0.8vh;
        .W-SomeDay {
            display: none;
        }
        .W-Alert {
            display: none;
        }
        .W-Alert-Phone {
            display: block;
            margin-bottom: 5vh;
        }
    }
`;
export const AlertImgSection = styled.div`
    width: 100%;
    display: flex;
    justify-items: center;
    align-items:center;
    margin-bottom:27vh;
    margin-left: -33vh;
    .Block-1 {
      width: 15vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    } 
    .Block-2 {
      width: 15vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    .Block-3 {
      width: 15vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    .Block-4 {
      width: 15vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
`;
export const PhoneImgSection = styled.div`
    width: 100%;
    height: 100vh;
    margin-left: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;  
`;