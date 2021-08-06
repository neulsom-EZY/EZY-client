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
    color: black;
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
    color: black;
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
    @media screen and (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        margin-right: -0,8vh;
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
    display: flex;
    justify-items: center;
    margin-top: -7vh;
    margin-bottom: 7vh;
  * {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  ::-webkit-scrollbar-button {
    width: 1px;
    height: 1px;
  }
  .external {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20vh;
    overflow: hidden;
    margin-bottom: -60vh;
    margin-top: -20vh;
  }
  .horizontal-scroll-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vh;
    transform: rotate(-90deg) translate3d(0,-100vh,0);
    transform-origin: right top;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    margin-top: -30vh;
    perspective: 1px;
    transform-style: preserve-3d;
  }
  .img-wrapper {
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
  }
  .img-wrapper:hover {
    /* 요건 나중에 ~ */
  }
  .slower {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%);
  }
  .slower1 {
    transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%);
  }
  .slower2 {
    transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%);
  }
  .slower-down {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%);
  }
  .faster {
    transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%);
  }
  .faster1 {
    transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%);
  }
  .fastest {
    transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh);
  }
  .vertical {
    transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%);
  }
  .last {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh);
  }
`;
