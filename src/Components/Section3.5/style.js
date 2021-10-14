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
    .Title{
        display: none;
    }
    @media screen and (max-width: 900px) {
        display: grid;
        height: 120vh;
        .Title{
            display: inline;
        }
    }
`;

export const TitleSection = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
    .Sub2{
        display: none;
    }
    .Main2{
        font-size: 35px;
        line-height: 7vh;
    }
    @media screen and (max-width: 900px) {
        justify-content: left;
        .Sub2{
            display: inline;
        }
    }
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 55px;
    line-height: 8vh;
    color: black;
    @media screen and (max-width: 900px) {
        font-size: 35px;
        line-height: 6vh;
    }
`;
export const SubTitle = styled.div`
    width: 100%;
    font-size: 30px;
    font-weight: 400;
    line-height: 5vh;
    color: #656565;
    margin-top: 5vh;
    @media screen and (max-width: 900px) {
        display: none;
        font-size: 20px;
        line-height: 4vh;
        margin: 0;
    }
`;

export const ImgSection = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content:center;
    .Phone{
        width: 39.5vh;
        margin-right: -15vh;
    }
    .Hand{
        width: 45vh;
        margin-bottom: -28vh;
    }
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        
        .Phone{
            width: 35vh;
            margin: 0;
        }
        .Hand{
            width: 40vh;
            margin: 0;
        }
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
  @media screen and (max-width: 900px) {
    .Main2{
        justify-content: center;
    }
  }
`;