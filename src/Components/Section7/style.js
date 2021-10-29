import styled from "styled-components";

export const MainSection = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  @media screen and (max-width: 500px) {
    height: 60vh;
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

  @media screen and (max-width: 1024px) {
    width: 500px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 40px;
    width: 400px;
  }
`;

export const SubSection = styled.div`
    height: 20vh;
    color: black;
    font-size: 35px;
    font-weight: 500;
    line-height: 8vh;
    `;

export const Line = styled.div`
    height: 2px;
    background-color: white;
`;

export const LineText = styled.div`
    font-size: 20px;
    line-height: 36px;
    margin-left: 25vw;
    margin-top: 50px;
    color: white;

    @media screen and (max-width : 500px){
        margin-left: 15vw;
        font-size: 15px;
        line-height: 28px;
    }
`;