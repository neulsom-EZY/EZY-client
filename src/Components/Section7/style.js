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
  display: flex;
  justify-content: center;
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
  @media screen and (max-width: 500px) {
    .Sub2 {
      display: none;
    }
  }

`;

export const MainTitle = styled.div`
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
  text-align: left;
  line-height: 1.5rem;
  margin-bottom: -10vh;
  text-align: center;
  height: 13.5vh;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-bottom: -20vh;
  }
  @media screen and (max-height: 600px) {
    font-size: 17px;
    margin-bottom: -15vh;
  }
`;
