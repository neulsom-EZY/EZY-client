import styled from "styled-components";

export const MainSection = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  @media screen and (max-width: 1050px) {
    margin-top: 30vh;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -30vh;
  @media screen and (max-width: 500px) {
    margin-bottom: -20vh;
  }
`;

export const TitleSection2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -30vh;
`;

export const MainTitle = styled.div`
  width: 100%;
  font-size: 50px;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 8vh;
  margin-bottom: -180px;
  @media screen and (max-width: 1024px) {
    width: 500px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 40px;
    width: 400px;
    line-height: 7.5vh;
  }
  @media screen and (max-width: 400px) {
    font-size: 35px;
    line-height: 9vh;
  }
  @media screen and (max-width: 330px) {
    font-size: 32px;
  }
`;
export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 1.5rem;
  margin-bottom: -10vh;
  text-align: center;
  height: 13.5vh;
  @media screen and (max-width: 700px) {
    font-size: 15px;
    margin-bottom: -20vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 13px;
    margin-bottom: -15vh;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
  @media screen and (max-width: 350px) {
    font-size: 9px;
  }
`;
