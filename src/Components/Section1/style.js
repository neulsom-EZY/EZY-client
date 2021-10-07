import styled from "styled-components";

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleSection = styled.div`
  color: white;
  font-size: 65px;
  font-weight: bold;
  z-index: 10000;
`;
export const VideoSection = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1000;
  overflow: hidden;
  video {
    width: 100%;
    opacity: 70%;
    z-index: -1000;
  }
`;