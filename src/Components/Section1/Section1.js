import React from "react";
import * as S from "./style";
import PC from "../../Assets/Section1/PC.mp4";
import Mobile from "../../Assets/Section1/Mobile.mp4";
import Logo from "../../Assets/Section1/Logo"
import Logo2 from "../../Assets/Section1/Logo2"

const Section1 = () => {
  return (
      <>
        <S.MainSection>
          <S.VideoSection>
            <S.TitleSection>
              <S.LogoSection><Logo/></S.LogoSection>
              <S.LogoSection2><Logo2/></S.LogoSection2>
              여러분의<br/>라이프스타일을<br/>혁신합니다.
            </S.TitleSection>
            {/*<video muted autoPlay loop playsInline className="Video-1">*/}
            {/*  <source src={PC} type="video/mp4"/>*/}
            {/*</video>*/}
            {/*<video muted autoPlay loop playsInline className="Video-2">*/}
            {/*  <source src={Mobile} type="video/mp4"/>*/}
            {/*</video>*/}
          </S.VideoSection>
        </S.MainSection>
        <S.SubSection>
          일정관리, 그 이상의 경험을 전달합니다.<br/>
          이지는 라이프스타일 혁신을 통한<br/>
          새로운 경험을 모두에게 전달하고 합니다.
        </S.SubSection>
      </>
  );
}

export default Section1;