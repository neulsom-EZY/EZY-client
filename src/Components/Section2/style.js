import styled from 'styled-components';
import Bg02 from '../../Assets/Bg02.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
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
    text-align: center;
`;
export const MainTitle = styled.div`
    width: 100%;
`;