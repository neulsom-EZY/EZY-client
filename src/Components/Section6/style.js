import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleSection = styled.div`
    width: 100%;
    word-break: keep-all;
    margin-bottom: 10vh;
`;

export const MainTitle = styled.div`
    margin-left: 20vh;
    font-weight: 700;
    font-size: 60px;
    line-height: 8.5vh;
    color: black;
`;

export const MainTitle2 = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 45px;
  line-height: 7vh;
  color: #656565;
  margin-left: 20vh;
`;

export const ImgSection = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    margin-left: 25vh;
    .Phone{
        width: 70vh;
    }
    .Hand{
        width: 82.5vh;
        margin-top: 25vh;
        margin-bottom: -20vh;
    }
`;

export const SubSection = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: #FFFFFF;
`;