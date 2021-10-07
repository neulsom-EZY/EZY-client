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
  font-size: 40px;
  font-weight: bold;
  line-height: 8vh;
`;
export const LogoSection = styled.div`
  top: -135%;
  position: absolute;
  z-index: 1;
`;
export const VideoSection = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: left;
  align-items: center;
  video {
    width: 100%;
    opacity: 70%;
    z-index: -1;
  }
`;