import styled from 'styled-components';
import Bg01 from '../../Assets/Bg01.png';
import Logo from "../../Assets/W-Logo.png";

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${Bg01});
    .Img01 {
        width: 45%;
        margin-top: -5vh;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
    }
    .Img02 {
        width: 22%;
        margin-top: 4vh;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
    }
`;
export const TitleSection = styled.div`
    width: 100%;
    margin-left: 20vh;
`;
export const MainTitle = styled.div`
    font-weight: 500;
    font-size: 40px;
`;
export const SubTitle = styled.div`
    margin-top: 4vh;
    font-size: 20px;
    line-height: 5vh;
`;

export const WLogo = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    margin-top: 5vh;
    width: 100%;
    height:11vh;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: 15vh;
`;