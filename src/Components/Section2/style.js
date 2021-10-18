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
    height: 120vh;
    flex-direction: column;
  }
`;
export const ImgSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: -10vh;
  .Phone {
    width: 40vh;
    margin-left: -10vh;
    z-index: -1;
  }
  .Hand {
    width: 60vh;
    z-index: 0;
    margin-top: 25vh;
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    margin: 7vh 21vh 5vh 0;
    .Hand{
      width: 32.5vh;
      margin: 0;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 5vh 19vh 5vh 0;
    .Phone{
      width: 30vh;
      margin-left: -8vh;
    }
    .Hand{
      width: 25vh;
    }
  }
`;

export const TitleSection = styled.div`
  width: 70%;
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  word-break: keep-all;
  @media screen and (max-width: 800px) {
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
    display: inline;
    font-size: 45px;
    line-height: 7vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 5vh;
  }
`;
export const SubTitle = styled.div`
  width: 100%;
  margin-top: 6vh;
  font-size: 30px;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 4vh;
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
    font-size: 20px;
    line-height: 4vh;
  }
`;