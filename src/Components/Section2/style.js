import styled from 'styled-components';

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: -17vh;
  .Phone {
    width: 40vh;
    height: 80vh;
    margin-left: -10vh;
    z-index: -1;
  }
  .Hand {
    width: 60vh;
    height: 47vh;
    z-index: 0;
    margin-top: 9vh;
  }
`;
export const TitleSection = styled.div`
  width: 100%;
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
  font-size: 55px;
  letter-spacing: 0.1vh;
  line-height: 8.5vh;
  color: black;
`;
export const SubTitle = styled.div`
  width: 100%;
  margin-top: 6vh;
  font-size: 30px;
  font-weight: 400;
  line-height: 6vh;
  color: #656565;
`;