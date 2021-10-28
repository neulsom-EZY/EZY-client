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
    margin-left: 25vh;
    font-weight: 700;
    font-size: 55px;
    line-height: 8.5vh;
    color: black;
`;

export const SubTitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 45px;
  line-height: 7vh;
  color: #656565;
  margin-left: 25vh;
`;

export const ImgSection = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 0 10vh 0 10vh;
    .Phone{
        width: 75vh;
        margin-left: 200px;
    }
    .Hand{
        width: 70vh;
        margin-top: 25vh;
        margin-bottom: -20vh;
    }

    @media screen and (max-width : 1500px){
        
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