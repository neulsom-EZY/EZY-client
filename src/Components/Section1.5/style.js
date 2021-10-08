import styled from 'styled-components';

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const MainTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 6.5vh;
  letter-spacing: 0.1vh;
  color: black;
`;

export const SubTitle = styled.div`
  width: 100%;
  margin-top: 6vh;
  font-size: 3.5vh;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
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

export const MainTitle2 = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  line-height: 8vh;
  color: black;
`;