import styled from 'styled-components';
import Bg01 from '../../Assets/Bg01.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${Bg01});
    .Img01 {
        width: 45%;
        margin-top: -5vh;
    }
    .Img02 {
        width: 22%;
        margin-top: 4vh;
    }
`;
export const TitleSection = styled.div`
    width: 100%;
    margin-left: 25vh;
`;
export const MainTitle = styled.div`
    font-size: 42px;
`;
export const SubTitle = styled.div`
    margin-top: 4vh;
    font-size: 20px;
    line-height: 5vh;
`;

export const Logo = styled.div`
  svg {
    width: 346px;
    height: 80px;
    overflow: visible;
  }
`;