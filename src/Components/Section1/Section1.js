import React from "react";
import * as S from "./style";
import Dance from "../../Assets/Section1/Dance.mp4";

const Section1 = () => {
  return (
      <>
        <S.MainSection>
          <S.TitleSection>
            여러분의<br/>라이프스타일을<br/>혁신합니다.
          </S.TitleSection>
          <S.VideoSection>
            <video muted autoPlay loop>
              <source src={Dance} type="video/mp4" />
            </video>
          </S.VideoSection>
        </S.MainSection>
      </>
  );
}

export default Section1;