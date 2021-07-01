import styled from 'styled-components';
import Bg01 from '../../Assets/Bg01.png';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${Bg01});
    z-index:1;
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
    margin-left: 3vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    font-size: 20px;
    font-weight: 400;
    line-height: 5vh;
`;
export const WLogo = styled.div`
    width: 100%;
    height: 11vh;
    margin-top: -40vh;
    margin-left: 3vh;
`;
export const MainBg = styled.div`
    width: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    .SubPhone {
        display: none;
        margin-right: -50vh;
        margin-top: 20vh;
    }
    @media screen and (max-width: 1700px) {
        .MainPhone {
            display: none;
        }
        .SubPhone {
            display: block;
        }
    }
`;
// export const Img1 = styled.div`
//     width: 100%;
//     height: 100vh;
//     margin-top: -50vh;
//     -webkit-touch-callout: none;
//     -webkit-user-select: none;
//     -khtml-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//     -webkit-user-drag: none;
// `;
export const Img2 = styled.div`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    margin-left: 3vh;
`;
// export const Img3 = styled.div`
//     width: 100%;
//     display: none;
//     margin-top: 15vh;
//     @media screen and (max-width: 1700px) {
//         display: block;
//     }
// `;