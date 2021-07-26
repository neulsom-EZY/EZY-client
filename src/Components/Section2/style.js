import styled from 'styled-components';
import Bg02 from '../../Assets/Bg02.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: -100;
    background-position: center;
    background-size: cover;
    background-image: url(${Bg02});
    @media screen and (max-width: 900px) {
        display: flex;
        justify-items: center;
        flex-direction: column;
        text-align: center;
    }
`;
export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
`;
export const MainTitle = styled.div`
    width: 100%;
    font-weight: 500;
    font-size: 40px;
    line-height: 8vh;
    text-align: left;
    margin-left: 16vh;
`;
export const SubTitle = styled.div`
    width: 100%;
    margin-top: 3vh;
    font-size: 20px;
    font-weight: 400;
    line-height: 5vh;
`;