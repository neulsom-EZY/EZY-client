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
    @media screen and (max-width: 700px) {
        display: flex;
        justify-items: center;
        flex-direction: column;
        text-align: center;
        height: 1300px;
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
    @media screen and (max-width: 700px) {
        margin: -30vh 0 0 0;
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
    @media screen and (max-width: 700px) {
        text-align: center;
        display: block;
        font-size: 22px;
        margin: 0 0 0 0;
        line-height: 3vh;
    }
`;
export const ImgSection = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height:100%;
    margin-bottom: -5vh;
    margin-right: 10vh;
    .W-Alert {
        margin-right: -3vh;
        margin-bottom: -8vh;
    }
    .W-Alert-Phone {
        display: none;
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
    @media screen and (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items:center;
        height: 700px;
        .W-SomeDay{
            width: 700px;
            height: 710px;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top: 30vh;
            margin-left: 30vh;
        }
        .W-Alert {
            display:none;
        }
        margin: 0 0 0 0;
    }
    @media screen and (max-width: 500px) {
        display: grid;
        justify-content: center;
        align-items: center;
        margin: 0 0 0 0;
        .W-SomeDay {
            /* display: none; */
            margin-top: -5vh;
        }
        .W-Alert {
            display: none;
        }
        .W-Alert-Phone {
            display: none;
        }
    }
`;
export const WebSomeDay = styled.div`
    //margin-left: -3vh;
    //margin-bottom: 10vh;
`;
export const AlertImgSection = styled.div`
    display: flex;
    justify-items: center;
    align-items:center;
    margin-bottom:28vh;
    margin-left: -35vh;
    @media screen and (max-width: 700px) {
        margin-left: 30vh;
        margin-right: 0;
        margin-bottom: 0;
        margin-top: -92vh;
    }
    @media screen and (max-width: 500px) {
        /* margin: -127vh 0 0 30vh; */
    }

`;
export const PhoneImgSection = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
        display: grid;
        justify-content: center;
        align-items:center;
        margin: 0 0 0 0;
    }
`;

export const Content4 = styled.div`
      @media screen and (max-width: 700px) {
        display: none;
    }
`;