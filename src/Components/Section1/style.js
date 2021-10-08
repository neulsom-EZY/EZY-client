import styled from "styled-components";

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleSection = styled.div`
  font-size: 65px;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  margin-left: 15vh;
  @media screen and (max-width: 1000px) {
    margin-left: 9vh;
  }
  @media screen and (max-width: 800px) {
    font-size: 55px;
    margin-left: 8vh;
  }
    @media screen and (max-width: 500px) {
    font-size: 33px;
    line-height: 2.8rem;
    margin-left: 5vh;
  }
`;
export const SubSection = styled.div`
  width: 100%;
  height: 50vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  font-size: 35px;
  font-weight: 300;
  line-height: 8vh;
  @media screen and (max-width: 500px) {
  }
`;
export const LogoSection = styled.div`
  top: -135%;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 500px) {
    top: -240%;
  }
`;
export const VideoSection = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: left;
  align-items: center;
  video { width: 100%;opacity: 85%;z-index: -1; }
  .Video-1 {display: block}
  .Video-2 { display: none }
  @media screen and (max-width: 945px) {
    .Video-1 { display: none; }
    .Video-2 { display: block }
  }
`;