import styled from 'styled-components';

export const MainSection = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 1;
`;
export const MainBg = styled.div `
    .Bg01 {
        width: 110vh;
        margin-top: -30vh;
    }
    .Bg02 {
        display: none;
    }
    .Bg03 {
        display: none;
    }
    @media only screen and (max-width: 1600px) {
        .Bg01 {
            display: none;
        }
        .Bg02 {
            display: block;
            width: 80vh;
            margin-top: -40vh;
        }
    }
    @media only screen and (max-width: 1400px) {
        .Bg02 {
            width: 80vh;
            margin-top: -40vh;
            font-size: 20px;
            font-weight: bold;
        }
    }
    @media only screen and (max-width: 1200px) {
        .Bg02 {
            width: 75vh;
            margin-top: -40vh;
            font-size: 20px;
            font-weight: bold;
        }
    }
    @media only screen and (max-width: 1180px) {
        .Bg02 {
            display: none;
        }
        .Bg03 {
            display: block;
            width: auto;
            height: 80vh;
            margin-top: 10vh;
            margin-right: 3vh;
        }
    }
    @media only screen and (max-width: 830px) {
        .Bg03 {
            display: block;
            width: auto;
            height: 70vh;
            margin-top: 17vh;
            margin-right: 3vh;
        }
    }
    @media only screen and (max-width: 800px) {
        .Bg03 {
            display: block;
            width: auto;
            height: 70vh;
            margin-top: 15vh;
            margin-right: 3vh;
        }
    }
    @media only screen and (max-width: 770px) {
        .Bg03 {
            display: block;
            width: auto;
            height: 65vh;
            margin-top: 20vh;
            margin-right: 3vh;
        }
    }
    @media only screen and (max-width: 760px) {
        .Bg03 {
            display: block;
            width: auto;
            height: 64vh;
            margin-top: 20vh;
            margin-right: 3vh;
        }
    }
    @media only screen and (max-width: 680px) {
        .Bg03 {
            display: none;
        }
    }
`;
export const TitleSection = styled.div `
    width: 100%;
    height: 60vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const MainTitle = styled.div `
    width: 100%;
    margin-top: 40vh;
    text-align: center;
    font-size: 75px;
    font-weight: 500;
    .text-box{
        @media only screen and (max-width: 890px) {
            font-size: 23px;
            font-weight: 600;
        }
        @media only screen and (max-width: 830px) {
            font-size: 22px;
        }
        @media only screen and (max-width: 760px) {
            font-size: 19px;
        }
        @media only screen and (max-width: 680px) {
            font-weight: 600;
        }
        @media only screen and (max-width: 500px) {
            font-size: 20px;
        }
        width: 100%;
        display: flex;
        justify-content:center;
        align-items:center;
        position: relative;
        margin-top:10vh;
        font-size: 25px;
    }
    .text-box div{
        display: inline-block;
        position: absolute;
        top: -200px;
        transform: rotateX(-90deg);
        opacity: 0;
        text-shadow: 0px 5px 5px rgba(0,0,0,.25);
        animation-timing-function: ease;
    }
    .text-box div:nth-child(1){
        animation: rollDown 10s forwards infinite;
    }
    .text-box div:nth-child(2){
        animation: rollDown2 10s forwards infinite;
    }
    .text-box div:nth-child(3){
        animation: rollDown3 10s forwards infinite;
    }
    @keyframes rollDown {
        0%{
            top: -200px;
            transform: rotateX(-90deg);
        }
        11%{
            top: -74px;
            transform: rotateX(0deg);
            opacity: 1;
        }
        22%{
            top: -74px;
            transform: rotateX(0deg);
            opacity: 1;
        }
        33%{
            top: 50px;
            transform: rotateX(30deg);
            opacity: 0;
        }
    }
    @keyframes rollDown2 {
        33%{
            top: -200px;
            transform: rotateX(-90deg);
        }
        44%{
            top: -74px;
            transform: rotateX(0deg);
            opacity: 1;
        }
        55%{
            top: -74px;
            transform: rotateX(0deg);
            opacity: 1;
        }
        66%{
            top: 50px;
            transform: rotateX(30deg);
            opacity: 0;
        }
    }
    @keyframes rollDown3 {
        66%{
            top: -200px;
            transform: rotateX(-90deg);
        }
        77%{
            top: -74px;
            transform: rotateX(0deg);
            opacity: 1;
        }
        88%{
            top: -74px;
            transform: rotateX(0deg);
            opacity: 1;
        }
        99%{
            top: 50px;
            transform: rotateX(30deg);
            opacity: 0;
        }
    }
`;
export const SubTitle = styled.div `
    width: 100%;
    display:flex;
    margin-top: 6vh;
    font-weight: 500;
`;