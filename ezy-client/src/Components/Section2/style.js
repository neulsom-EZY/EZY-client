import styled from 'styled-components';

export const MainSection = styled.div `
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TitleSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
`;
export const MainTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: lighter;
    text-shadow: 0px 5px 5px rgba(0,0,0,.25);
`;
export const SubTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const MainBg = styled.div`
    width: 85%;
    .Bg11 {
        width: 80%;
        margin-left: 25vh;
    }
`;