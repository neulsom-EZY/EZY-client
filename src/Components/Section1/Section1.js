import React from "react";
import * as S from "./style";
import PC from "../../Assets/Section1/PC.mp4";
import Logo from "../../Assets/Section1/Logo"

const Section1 = () => {
  return (
      <>
        <S.MainSection>
          <S.VideoSection>
            <S.TitleSection>
              <S.LogoSection><Logo/></S.LogoSection>
              여러분의<br/>라이프스타일을<br/>혁신합니다.
            </S.TitleSection>
            <video muted autoPlay loop>
              <source src={PC} type="video/mp4"/>
            </video>
          </S.VideoSection>
        </S.MainSection>
        <S.SubSection>

        </S.SubSection>
      </>
  );
}

export default Section1;