import styled from 'styled-components';

export const MainSection = styled.div `
    width: 100%;
    height: 150vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    @media screen and (max-width: 500px){
        height: 100vh;
    }
`;

export const TitleSection = styled.div `
    width: 100%;
    word-break: keep-all;
`;

export const MainTitle = styled.div `
    margin-left: 20vh;
    margin-right: 10vh;
    font-weight: 700;
    font-size: 55px;
    line-height: 8.5vh;
    color: black;

    @media screen and (max-width: 1400px) {
        font-size: 45px;
        margin-left: 12vh;
        margin-right: 5vh;
    }

    /* @media screen and (max-width: 1000px){
        margin-left: 10vh;
        margin-right: 0;
        font-size: 45px;
        line-height: 7vh;
    } */
    @media screen and (max-width: 1000px){
        font-size: 35px;
        margin-left: 8vh;
        line-height: 6vh;
    }
    @media screen and (max-width: 770px){
        display: block;
        font-size: 30px;
        margin-left: 6vh;
        width: 550px;
    }
    
    @media screen and (max-width: 500px){
        display: none;
    }

`;


export const MainTitle2 = styled.div `
    display: none;
    color: black;
    font-weight: bold;
    
    @media screen and (max-width: 500px) {
        display: block;
        font-size: 30px;
        margin-left: 3vh;
        line-height: 2.5rem;
  }
`;

export const SubTitle = styled.div `
    margin-left: 20vh;
    margin-right: 10vh;
    font-weight: 500;
    font-size: 40px;
    line-height: 7vh;
    color: #656565;
    @media screen and (max-width: 1400px) {
        font-size: 30px;
        margin-left: 12vh;
        margin-right: 5vh;
    }
    @media screen and (max-width: 1000px){
        margin-left: 10vh;
        margin-right: 0;
        font-size: 30px;
        line-height: 6.5vh;
    }
    @media screen and (max-width: 1000px){
        font-size: 25px;
        margin-left: 8vh;
        line-height: 6vh;
    }
    @media screen and (max-width: 770px){
        font-size: 20px;
        margin-left: 6vh;
    }
    @media screen and (max-width: 500px){
        line-height: 5.5vh;
        margin-left: 3vh;
    }
`;

export const ImgSection = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10vh 0 15vh 0;
    .Phone{
        width: 70vh;
        /* margin-right: 10vh; */
        margin-left: 40vh;
    }
    .Hand{
        width: 70vh;
        margin-top: 25vh;
        margin-bottom: -20vh;
    }

    @media screen and (max-width: 1400px){
        .Phone{
            width: 50vh;
            margin-left: 20vh;
        }
        .Hand{
            width: 50vh;
        }
    }

    @media screen and (max-width: 1000px){
        .Phone{
            width: 40vh;
            margin-left: 8vh;
            margin-bottom: -10vh;
        }
        .Hand{
            width: 40vh;
        }
    }
    @media screen and (max-width: 770px){
        .Phone{
            width: 30vh;
            margin-left: 6vh;
            margin-bottom: -10vh;
        }
        .Hand{
            width: 30vh;
        }
    }
    @media screen and (max-width: 500px){
        .Phone{
            width: 25vh;
            margin-left: 3vh;
        }
        .Hand{
            width: 20vh;
            margin-top: 10vh;
            margin-bottom: -15vh;
        }
    }
`;