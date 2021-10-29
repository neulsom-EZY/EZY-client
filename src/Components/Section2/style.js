import styled from 'styled-components';

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 150vh;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    height: 145vh;
    flex-direction: column;
  }
`;
export const ImgSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -21vh;
  margin-right: 5vh;
  .Phone {
    width: 40vh;
    margin-left: -10vh;
    z-index: -1;
  }
  .Hand {
    width: 60vh;
    z-index: 1;
    margin-top: 100px;
  }
  @media screen and (max-width: 1100px) {
    margin-left: -15vh;
    margin-right: 2.5vh;
    .Hand{
      width: 50vh;
      margin-top: 100px;
    }
  }
  @media screen and (max-width: 1010px) {
    .Phone{
      width: 35vh;
    }
    .Hand{
      width: 40vh;
      margin-top: 60px;
    }
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    margin: 7vh 40vh 5vh 0;
    .Hand{
      width: 47vh;
      margin: 0;
      margin-top: 100px;
    }
    .Phone {
      margin-left: -8vh;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 8vh 25vh 5vh 0;
    .Phone{
      width: 30vh;
      height: auto;
    }
    .Hand{
      width: 26vh;
      height: auto;
      margin-left: 8vh;
      margin-top: -3vh;
    }
  }
`;

export const TitleSection = styled.div`
  width: 70%;
  display: grid;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  word-break: keep-all;
  margin-left: 5vh;
  @media screen and (max-width: 1100px) {
    margin-left: 2.5vh;
  }
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;
export const TitleSection2 = styled.div`
  display: none;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  word-break: keep-all;
  @media screen and (max-width: 800px) {
    display: block;
    justify-content: flex-start;
  }
`;
export const MainTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 55px;
  letter-spacing: 0.1vh;
  line-height: 8.5vh;
  color: black;
  @media screen and (max-width: 910px) {
    font-size: 45px;
    line-height: 8vh;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const MainTitle2 = styled.div`
  display: none;
  width: 100%;
  font-weight: bold;
  font-size: 55px;
  letter-spacing: 0.1vh;
  line-height: 8.5vh;
  color: black;
  @media screen and (max-width: 800px) {
    display: block;
    font-size: 45px;
    line-height: 7vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 2.5rem;
    margin-left: -3vh;
  }
`;
export const SubTitle = styled.div`
  width: 100%;
  margin-top: 6vh;
  font-size: 30px;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
  @media screen and (max-width: 910px) {
    font-size: 25px;
    line-height: 5vh;
  }
  @media screen and (max-width: 500px) {
    margin-top: 3.5vh;
    width: 120%;
    font-size: 20px;
    line-height: 5.5vh;
    margin-left: -3vh;
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
export const SubSectionTitle = styled.div`
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