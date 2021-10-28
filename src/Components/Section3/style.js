import styled from 'styled-components';

export const MainSection = styled.div `
  width: 100%;
  height: 1300px;
  z-index: -100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 800px) {
    height: 140vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    height: 100vh;
    flex-direction: column;
  }
`;

export const ImgSection = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:  -194.67px;
  margin-right: 46.35px;

  .Schedule {
    width: 370.8px;
    margin-left: -92.7px
  }
;
  .Hand {
    width:  556.2px;
    margin-bottom: -885.285px;
    z-index: 1;
  }

  @media screen and (max-width: 1100px){
    margin-left: -139.05px;
    margin-right:23.175px;
    .Schedule{
      width: 324.45px;
    }
    .Hand{
      width: 370.8px;
      margin-bottom: -695.25px;
    }
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    margin: 64.89px 231.75px 139.05px 0;
    .Hand{
      width: 301.275px;
      margin: 0;
      margin-bottom: -667.44px;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 64.89px 194.67px 139.05px 0;
    .Schedule{
      width: 240px;
      height: 475px;
      margin-left: -111.24px;
      z-index: -1;
    }
    .Hand{
      width: 230px;
      height: 180px;
      margin-left: 65.255px;
      margin-bottom: -500px;
      z-index: 1;
    }
  }
`;

export const TitleSection = styled.div `
  width: 70%;
  display: grid;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  word-break: keep-all;
  margin-left: 46.35px;
  margin-bottom: 92.7px;

  .Schedule2 {
    display: none;
  }

  @media screen and (max-width: 1100px){
    margin-left: 23.175px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 500px) {
    .Schedule2 {
      width: 278.1px;
    }
  }
`;

export const TitleSection2 = styled.div `
  display: none;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  word-break: keep-all;

  @media screen and (max-width: 800px) {
    display: block;
    justify-content: flex-start;
  }
`;

export const MainTitle = styled.div `
  width: 100%;
  font-weight: 700;
  font-size: 55px;
  line-height: 74.16px;
  color: black;

  @media screen and (max-width: 1300px){
    width: 270px;
    margin-right: 23.175px;
  }
  @media screen and (max-width: 1100px){
    font-size: 45px;
    line-height: 74.16px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px
  }
`;

export const MainTitle2 = styled.div `
  display: none;
  width: 100%;
  font-weight: bold;
  font-size: 55px;
  letter-spacing: 0.927px;
  line-height: 78.795px;
  color: black;

  @media screen and (max-width: 800px) {
    display: block;
    font-size: 45px;
    line-height: 64.89px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 46.35px;
    margin-left: -27.81px;
  }
`;

export const SubTitle = styled.div `
  width: 500px;
  font-size: 30px;
  font-weight: 400;
  line-height: 55.62px;
  color: #656565;
  margin-top: 27.81px;
  margin-bottom: 27.81px;

  @media screen and (max-width: 1100px){
    font-size: 25px;
    line-height: 46.35px;
  }
  @media screen and (max-width: 500px) {
    width: 120%;
    font-size: 20px;
    line-height: 46.35px;
    margin-left: -27.81px;
  }
`;

export const SubTitle2 = styled.div `
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  line-height: 74.16px;
  color: black;
  
  @media screen and (max-width: 800px) {
    font-size: 20px;
    line-height: 37.08px;
  }
`;

export const IconSection = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -101.97px;

  @media screen and (max-width: 1100px){
    margin-bottom: 0;
  }

  @media screen and (max-width:800px){
      display: none;
  }
`;

export const IconTextSection = styled.div `
  width: 100%;
  color: #656565;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  vertical-align: baseline;
  font-weight: 400;
  font-size: 20px;
  margin-right: 9.27px;
  margin-bottom: 9.27px;

  .Icon1, .Icon2, .Icon3 {
    margin-right: 18.54px;
  }

  @media screen and (max-width: 1100px){
    font-size: 18px;
    margin-bottom: 0;
  }
`;

export const SubSection = styled.div `
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
  
  @media screen and (max-width: 500px) {
    height: 35vh;
  }
`;