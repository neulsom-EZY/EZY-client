import styled from "styled-components";

export const MainSection = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  @media screen and (max-width: 500px) {
    height: 80vh;
  }
  @media screen and (max-width: 1050px) {
    margin-top: 30vh;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.div`
  font-size: 50px;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 8vh;

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
  }
  @media screen and (max-width: 330px) {
    font-size: 32px;
  }
`;

export const SubSection = styled.div`
  height: 20vh;
  color: black;
  font-size: 35px;
  font-weight: 500;
  line-height: 8vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
`;

export const Line = styled.div`
  height: 1px;
  background-color: white;
`;

export const LineText = styled.div`
  font-size: 20px;
  line-height: 36px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  margin-left: -20vh;
  color: white;


  @media screen and (max-width: 500px) {
    margin-left: 15vw;
    font-size: 15px;
    line-height: 28px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 11vw;
  }
  @media screen and (max-width: 330px) {
    margin-left: 7vw;
  }
`;