import styled from 'styled-components';

export const MainSection = styled.div`
  width: 100%;
  height: 1300px;
  z-index: -100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 800px) {
    height: 140vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    height: 140vh;
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
  .Schedule {
    width: 40vh;
    margin-left: -10vh;
  }
  .Hand {
    width: 60vh;
    margin-bottom: -95.5vh;
    z-index: 1;
  }
  @media screen and (max-width: 1100px){
    margin-left: -15vh;
    margin-right: 2.5vh;
    .Schedule{
      width: 35vh;
    }
    .Hand{
      width: 40vh;
      margin-bottom: -75vh;
    }
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    margin: 7vh 20vh 15vh 0;
    .Hand{
      width: 43vh;
      margin: 0;
      margin-bottom: -78vh;
      margin-left: -11.5vh;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 7vh 15vh 15vh 0;
    .Schedule{
      width: 28vh;
      height: auto;
      margin-left: -11vh;
      z-index: -1;
    }
    .Hand{
      width: 33vh;
      height: auto;
      margin-left: -6.5vh;
      margin-bottom: -62vh;
      z-index: 1;
    }
  }
  @media screen and (max-width: 330px) {
    .Hand{
      margin-bottom: -460px;
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
  margin-bottom: 10vh;
  .Schedule2 {
    display: none;
  }
  @media screen and (max-width: 1100px){
    margin-left: 2.5vh;
    margin-bottom: 0;
  }
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 500px) {
    .Schedule2 {
      width: 30vh;
    }
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
  font-weight: 700;
  font-size: 55px;
  line-height: 8vh;
  color: black;
  @media screen and (max-width: 1300px){
    width: 270px;
    margin-right: 2.5vh;
  }
  @media screen and (max-width: 1100px){
    font-size: 45px;
    line-height: 8vh;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px
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
    line-height: 5vh;
    margin-left: -3vh;
  }
`;

export const SubTitle = styled.div`
  width: 500px;
  font-size: 30px;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
  margin-top: 3vh;
  margin-bottom: 3vh;
  @media screen and (max-width: 1100px){
    margin-left: -1.5vh;
    font-size: 25px;
    line-height: 5vh;
  }
  @media screen and (max-width: 500px) {
    width: 120%;
    font-size: 20px;
    line-height: 5vh;
    margin-left: -4.5vh;
  }
  @media screen and (max-width: 330px) {
    width: 100%;
  }
`;

export const IconSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -11vh;
  @media screen and (max-width: 1100px){
    margin-bottom: 0;
  }
  @media screen and (max-width:800px){
      display: none;
  }
`;

export const IconTextSection = styled.div`
  width: 100%;
  color: #656565;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  vertical-align: baseline;
  font-weight: 400;
  font-size: 20px;
  margin-right: 1vh;
  margin-bottom: 1vh;
  .Icon1, .Icon2, .Icon3 {
    margin-right: 2vh;
  }
  @media screen and (max-width: 1100px){
    font-size: 18px;
    margin-bottom: 0;
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
    font-size: 19px;
    font-weight: 500;
    height: 40vh;
    line-height: 5vh;
  }
`;