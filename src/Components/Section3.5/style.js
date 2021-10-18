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
`;

export const TitleSection = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
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
`;

export const MainTitle2 = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 35px;
  line-height: 7vh;
  color: black;
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
`;

export const SubSection = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
`;