import styled from 'styled-components';
import Bg01 from '../../Assets/Bg01.png';
import Logo from "../../Assets/W-Logo.png";
import Img02 from "../../Assets/Img02.png";
import Img01 from "../../Assets/Img01.png";

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${Bg01});
`;

export const TitleSection = styled.div`
    width: 100%;
    display:grid;
    justify-content:center;
    align-items:center;
`;
export const MainTitle = styled.div`
    font-weight: 500;
    font-size: 40px;
`;
export const SubTitle = styled.div`
    margin-top: 3vh;
    margin-bottom: 3vh;
    font-size: 20px;
    line-height: 3vh;
`;
export const WLogo = styled.div`
    position: fixed;
    top: 5vh;
    left: 16vh;
    width: 100%;
    height:11vh;
    /* background-image: url(${Logo}); */
    background-repeat: no-repeat;
    background-size: 11vh;
`;
export const Img1 = styled.div`
    width: 100%;
    height: 130vh;
    margin-top: -10vh;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    background-image:url(${Img01});
    background-repeat: no-repeat;
    background-size: 100%;
`;
export const Img2 = styled.div`
    width: 100%;
    height: 5.1vh;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    background-image:url(${Img02});
    background-repeat: no-repeat;
    background-size: 15vh;
`;