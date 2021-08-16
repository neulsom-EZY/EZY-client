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
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 140vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`;

export const ImgSection = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height:100%;
`;

export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 16vh;
    word-break: keep-all;
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 8vh;
    color: black;
`;

export const SubTitle = styled.div`
    width: 100%;
    margin-top: 3vh;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    color: #656565;
`;

export const IconSection = styled.div`
    display:grid;
    color: #656565;
    font-size: 22px;
    font-weight: 400;
`;

export const IconWrapper = styled.div`
    display: flex;
`;