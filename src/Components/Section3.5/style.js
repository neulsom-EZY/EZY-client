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
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 500px ) {
    flex-direction: column;
    height: 145vh;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  @media screen and (max-width: 900px) {
    margin-left: 5vh;
  }
  @media screen and (max-width: 780px) {
    margin-left: 3vh;
  }
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const MainTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 55px;
  line-height: 8.5vh;
  color: black;
  @media screen and (max-width: 1290px) {
    font-size: 50px;
  }
  @media screen and (max-width: 900px) {
    width: 320px;
  }
  @media screen and (max-width: 780px) {
    font-size: 45px;
  }
  @media screen and (max-width: 660px) {
    width: 250px;
    font-size: 43px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 30px;
    margin-left: -4vh;
    line-height: 2.7rem;
  }
  @media screen and (max-width: 400px) {
    width: 110%;
    margin-left: -1vh;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 400;
  line-height: 5.5vh;
  color: #656565;
  margin-top: 5vh;
  @media screen and (max-width: 1290px) {
    font-size: 25px;
  }
  @media screen and (max-width: 780px) {
    font-size: 22px;
    line-height: 2.8rem;
  }
  @media screen and (max-width: 660px) {
    font-size: 20px;
    width: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 200%;
    margin-left: -4vh;
    line-height: 5vh;
  }
  @media screen and (max-width: 400px) {
    margin-left: -1vh;
  }
`;

export const ImgSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .Phone {
    width: 39.5vh;
    margin-right: -15vh;
  }

  .Hand {
    width: 45vh;
    margin-bottom: -28vh;
  }

  @media screen and (max-width: 1135px) {
    margin-right: -13vh;
  }

  @media screen and (max-width: 1290px) {
    .Phone {
      width: 37vh;
    }

    .Hand {
      width: 43vh;
    }
  }
  @media screen and (max-width: 1030px) {
    .Phone {
      width: 35.5vh;
    }

    .Hand {
      width: 41vh;
      margin-bottom: -25vh;
    }
  }
  @media screen and (max-width: 900px) {
    margin-right: 0;
    margin-right: -20vh;
  }
  @media screen and (max-width: 780px) {
    .Phone {
      width: 30vh;
    }

    .Hand {
      width: 37vh;
      margin-bottom: -24vh;
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 660px) {
    margin-right: 18vh;
    .Hand {
      display: none;
    }

    .Phone {
      width: 25vh;
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ImgSection2 = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    @media screen and (max-height: 600px) {
      margin-left: 9vh;
    }
    display: block;
    margin: 0;
    margin-left: 0vh;
    .Phone {
      width: 28vh;
      height: auto;
      z-index: -1;
      margin-top: 7vh;
      margin-bottom: 3.5vh;
      margin-right: -10vh;
    }

    .Hand {
      z-index: 1;
      width: 26vh;
      margin-bottom: -10vh;
      margin-right: -16vh;
    }
  }
`;
export const SubSection = styled.div`
  width: 100%;
  height: 50vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 8vh;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
  }
  @media screen and (max-width: 800px) {
    font-size: 25px;
    line-height: 6.5vh;
    height: 43vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: 500;
    height: 40vh;
    line-height: 5vh;
  }
`;