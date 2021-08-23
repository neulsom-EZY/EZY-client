import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    z-index: -100;
    display: grid;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
`;

export const TitleSection = styled.div`
    width: 100%;
    word-break: keep-all;
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 44px;
    line-height: 6vh;
    color: black;
`;

export const ReviewSection = styled.div`
    width: 100%;
    height:100%;
`;

export const BgCircle = styled.div`
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
    background-color: #AFADFF;
`;