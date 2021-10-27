import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 150vh;
    display: grid;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    z-index: -100;
    @media screen and (max-width: 700px)
    { height: 200vh }
`;
export const ImgSection = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    align-items:center;
    flex-direction: column;
    margin-top: -15vh;
    @media screen and (max-width: 500px)
    { margin-top: -30vh }
`;
export const TitleSection = styled.div`
    width: 100%;
    word-break: keep-all;
    @media screen and (max-width: 960px)
    { width: 50%; } 
    @media screen and (max-width: 700px)
    { width: 100%; margin-bottom: -20vh}
`;
export const MainTitle = styled.div`
  width: 100%;
  font-size: 44px;
  font-weight: bold;
  line-height: 7vh;
  color: black;
  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 7.5vh;
  }

`;
export const SubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  line-height: 6vh;
  color: black;
  @media screen and (max-width: 700px) {
    margin-top: 3vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;
export const SubTitle2 = styled.div`
    font-size: 31px;
    font-weight: bold;
    margin-left: 3vh;
    margin-top: 3vh;
    line-height: 4.5vh;
    color: black;
    float: left;
    @media screen and (max-width: 700px)
    { margin: 0 }
    @media screen and (max-width: 700px)
    { font-size: 24px }
`;
export const SubTitle4 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  line-height: 6vh;
  color: black;
  @media screen and (max-width: 700px) {
    margin-bottom: 3vh;
  }
  @media screen and (max-width: 500px) {
    line-height: 6vh;
    font-size: 25px
  }
`;
export const SubTitle3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;
export const FirstSection = styled.div`
  .Top {
    width: 40vh;
    margin-top: 5.5vh
  }
;
  width: 100vh;
  height: 47vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6vh;
  background-color: #BAC8FF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 960px) {
    width: 75vh
  }
  @media screen and (max-width: 700px) {
    width: 50vh;
    height: 50vh;
    flex-direction: column;
    margin-bottom: 14vh;
    .Top {
      width: 30vh;
      margin-left: 3.9vh;
      margin-top: 2.4vh;
    }
  }
  @media screen and (max-width: 500px) {
    width: 38vh;
    margin: 0;
    margin-bottom: 16vh;
  }
`;
export const SecondSection = styled.div`
  width: 100vh;
  height: 47vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
  @media screen and (max-width: 960px) {
    width: 100%
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const SubSection = styled.div`
  width: 75vh;
  height: 102%;
  border-radius: 6vh;
  background-color: #FFFFFF;
  margin-top: 1vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .Bottom {
    width: 40vh;
    margin-left: 18vh;
    margin-bottom: 1vh;
  }
;
  @media screen and (max-width: 960px) {
    width: 50vh;
    .Bottom {
      margin-left: 8vh
    }

    @media screen and (max-width: 700px) {
      width: 50vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .Bottom {
        width: 30vh;
        margin-left: 11.4vh
      }
    }
  }
`;
export const SubSection2 = styled.div`
  width: 25vh;
  height: 100%;
  margin-left: 4vh;
  @media screen and (max-width: 960px) {
    width: 20vh
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`;
export const SubSection3 = styled.div`
  display: grid;
  width: 100%;
  height: 70%;
  border-radius: 5vh;
  background-color: #FFFFFF;
  margin-bottom: 1vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 60%;
    text-align: center;
    margin-top: 3vh;
    margin-bottom: 3vh
  }
`;
export const SubSection4 = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 5vh;
  background-color: #BAC8FF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 700px) { {
    height: 35%;
    border-radius: 4vh
  }
`;
export const Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vh;
`;
