import styled from 'styled-components';

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    overflow-x: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media screen and (max-width: 375px) {
    height: 145vh;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  margin-left: 7vh;
  margin-right: 8vh;
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  word-break: keep-all;
  @media screen and (max-width: 500px) {
    margin: 0 0 0 0;
    justify-content: left;
  }
`;

export const MainTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 55px;
  letter-spacing: 0.1vh;
  color: black;
  @media screen and (max-width: 960px) {
    font-size: 52px;
  }
  @media screen and (max-width: 900px) {
    font-size: 49px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MainTitle2 = styled.div`
  display: none;
  width: 100%;
  font-weight: 700;
  font-size: 6.5vh;
  letter-spacing: 0.1vh;
  color: black;
  @media screen and (max-width: 500px) {
    display: block;
    font-size: 30px;
    margin-left: 3vh;
    margin-bottom: 10vh;
    line-height: 2.5rem;
  }
  @media screen and (max-width: 375px) {
    margin-left: 5vh;
  }
  @media screen and (max-width: 320px) {
    margin-left: 10vh;
  }
`;

export const MainTitle3 = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  line-height: 8vh;
  color: black;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    line-height: 4vh;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    height: 40vh;
    line-height: 6vh;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  margin-top: 6vh;
  font-size: 30px;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
  @media screen and (max-width: 1000px) {
    font-size: 27px;
    line-height: 5vh;
  }
  @media screen and (max-width: 900px) {
    font-size: 26px;
  }
  @media screen and (max-width: 500px) {
    display: none;
    margin: 0 0 0 0;
  }
`;

export const SubTitle2 = styled.div`
  display: none;
  width: 100%;
  margin-top: 6vh;
  font-size: 3.5vh;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
  @media screen and (max-width: 500px) {
    display: block;
    margin: 0 0 0 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 4vh;
    margin-left: 3vh;
    margin-top: -15vh;
  }
  @media screen and (max-width: 375px) {
    line-height: 5.5vh;
    margin-left: 5vh;
  }
  @media screen and (max-width: 320px) {
    line-height: 5.5vh;
    margin-left: 10vh;
  }
`;

export const ImgSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .Phone {
    width: 40vh;
    height: 80vh;
    margin-right: -18vh;
  }

  .Hand {
    width: 60vh;
    height: 47vh;
    margin-top: 13vh;
  }

  @media screen and (max-width: 1470px) {
    .Phone {
      width: 35vh;
      height: 70vh;
      margin-right: -16vh;
    }

    .Hand {
      margin-top: 7vh;
      width: 45vh;
      height: 37vh;
    }
  }
  @media screen and (max-width: 1320px) {
    .Phone {
      width: 32.5vh;
      height: 65vh;
      margin-right: -15vh;
    }

    .Hand {
      margin-top: -3vh;
      width: 28vh;
      height: 22vh;
    }
  }
  @media screen and (max-width: 960px) {
    .Phone {
      width: 30vh;
      height: 60vh;
      margin-right: -14vh;
    }

    .Hand {
      margin-top: -3vh;
      width: 23vh;
      height: 20vh;
    }
  }
  @media screen and (max-width: 900px) {
    display: grid;
    margin-top: -15vh;
    margin-bottom: -15vh;
    margin-left: 2.1vh;
    .Phone {
      width: 25vh;
      height: 50vh;
      margin-top: 0;
    }

    .Hand {
      width: 23vh;
      height: 20vh;
      margin-top: -50vh;
      margin-left: 13vh;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: -22vh;
    margin-bottom: 3.5vh;
    margin-left: 3.1vh;
    .Phone {
      width: 240px;
      height: 475px;
      margin-top: 0;
    }

    .Hand {
      width: 230px;
      height: 180px;
      margin-top: -43vh;
    }
  }
  @media screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    margin-left: 6.5vh;
    .Phone{
      margin-right: -20vh;
    }
    .Hand{
      width: 200px;
      margin-left: 4vh;
      margin-top: 0;
    }
  }
`;

export const SubSection = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
  @media screen and (max-width: 500px) {
    height: 35vh;
  }
`;