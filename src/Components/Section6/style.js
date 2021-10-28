import styled from 'styled-components';

export const MainSection = styled.div`
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

export const TitleSection = styled.div`
    width: 100%;
    word-break: keep-all;
`;

export const MainTitle = styled.div`
    margin-left: 20vh;
    margin-right: 10vh;
    font-weight: 700;
    font-size: 55px;
    line-height: 8.5vh;
    color: black;
    @media screen and (max-width: 1200px){
        margin-left: 12vh;
        margin-right: 5vh;;
    }
    @media screen and (max-width: 1000px){
        margin-left: 10vh;
        margin-right: 0;
        font-size: 45px;
        line-height: 7vh;
    }
    @media screen and (max-width: 800px){
        font-size: 35px;
        line-height: 6vh;
    }
    @media screen and (max-width: 600px){
        margin-left: 5vh;
    }
`;

export const SubTitle = styled.div`
    margin-left: 20vh;
    margin-right: 10vh;
    font-weight: 500;
    font-size: 40px;
    line-height: 7vh;
    color: #656565;
    @media screen and (max-width: 1200px){
        margin-left: 12vh;
        margin-right: 5vh;;
    }
    @media screen and (max-width: 1000px){
        margin-left: 10vh;
        margin-right: 0;
        font-size: 35px;
        line-height: 6.5vh;
    }
    @media screen and (max-width: 800px){
        font-size: 25px;
        line-height: 6vh;
    }
    @media screen and (max-width: 600px){
        margin-left: 5vh;
    }
    @media screen and (max-width: 500px){
        font-size: 20px;
        line-height: 5vh;
    }
`;

export const ImgSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 10vh 0 15vh 0;
    .Phone{
        width: 70vh;
        margin-right: 10vh;
    }
    .Hand{
        width: 70vh;
        margin-top: 25vh;
        margin-bottom: -20vh;
    }
    @media screen and (max-width: 1650px){
        .Phone{
            width: 60vh;
        }
        .Hand{
            width: 60vh;
        }
    }
    @media screen and (max-width: 1500px){
        .Phone{
            margin: 0;
        }
    }
    @media screen and (max-width: 1200px){
        .Phone{
            width: 50vh;
        }
        .Hand{
            width: 50vh;
        }
    }
    @media screen and (max-width: 1000px){
        .Phone{
            width: 40vh;
        }
        .Hand{
            width: 40vh;
        }
    }
    @media screen and (max-width: 800px){
        .Phone{
            width: 30vh;
        }
        .Hand{
            width: 30vh;
        }
    }
    @media screen and (max-width: 500px){
        .Phone{
            width: 20vh;
            margin-right: 0;
        }
        .Hand{
            width: 20vh;
            margin-top: 10vh;
            margin-bottom: -15vh;;
        }
    }
`;