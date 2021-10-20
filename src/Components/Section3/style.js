import styled from 'styled-components';

export const MainSection = styled.div `
  width: 100%;
  height: 1300px;
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

  @media screen and (max-width: 800px) {
    height: 150vh;
    flex-direction: column;
  }
`;

export const ImgSection = styled.div `

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: -75vh;
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
  @media screen and (max-width: 1300px){
    margin-left : -70vh;
    .Hand {
      width: 50vh;
      margin-bottom: -85.5vh;
    }
  }
  @media screen and (max-width: 1100px){
    margin-left: -15vh;
    margin-right: 2.5vh;
  }
  @media screen and (max-width: 1010px) {
    .Schedule {
      width: 35vh;
    }
    .Hand {
      width: 40vh;
      margin-bottom: -75.5vh;
    }
  }
  @media screen and (max-width: 900px) {
    .Schedule {
      display: none;
    }
  }
    @media screen and (max-width: 800px) {
      margin: 7vh 25vh 5vh -15vh;
      justify-content: center;
      align-items: flex-end;
    .Hand{
      width: 32.5vh;
      margin-bottom: -135.5vh;
    }
  }
`;

export const TitleSection = styled.div `
  width: 70%;
  height: 500px;
  display: grid;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  margin-bottom: 15vh;
  margin-left: 5vh;
  .Schedule2 {
    display: none;
  }

  @media screen and (max-width: 900px) {
    width : 70%;
    .Schedule2 {
      width: 37vh;
      display: inline;
      margin-left: 2vh;
    }
  }
  @media screen and (max-width: 500px) {
    .Schedule2 {
      width: 30vh;
    }
  }
`;

export const MainTitle = styled.div `
  width: 100%;
  font-weight: 700;
  font-size: 55px;
  line-height: 8vh;
  color: black;
  @media screen and (max-width: 1100px){
    width: 270px;
    margin-right: 2.5vh;
  }
  @media screen and (max-width: 910px){
    font-size: 45px;
    line-height: 8vh;
  }
  @media screen and (max-width: 900px) {
    margin: 15vh 0 15vh 0;
  }

  @media screen and (max-width: 800px) {
    display: block;
    font-size: 45px;
    line-height: 7vh;
    width: 220px;
    text-align: start;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px
  }
`;

export const SubTitle = styled.div `
  width: 100%;
  font-size: 27px;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
  margin-top: 3vh;
  margin-bottom: 3vh;
  @media screen and (max-width: 1100px){
    font-size: 25px;
    margin-right: 2.5vh;
  }
  @media screen and (max-width: 910px){
    font-size: 25px;
    line-height: 5vh;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const SubTitle2 = styled.div `
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  line-height: 5vh;
  color: #656565;
  margin-top: 3vh;
  margin-bottom: 12vh;
  display: none;
  
  @media screen and (max-width: 900px) {
    display: inline;
    margin-top: 15vh;
    margin-bottom: 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px
  }
`;

export const SubTitle3 = styled.div `
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  line-height: 8vh;
  color: black;
`;

export const IconSection = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -11vh;

  
  @media screen and (max-width: 900px) {
    /* width: 40%; */
    margin: 10vh 0 -5vh 0;
  }

  @media screen and (max-width:500px){
      display: none;
  }
`;

export const IconTextSection = styled.div `
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
`;

export const SubSection = styled.div `
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
`;