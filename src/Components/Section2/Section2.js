import React from "react";
import Fade from "react-reveal/Fade";
import * as S from "./style";
import Hand from "../../Assets/Section2/hand.png";
import Phone from "../../Assets/Section2/Phone.png";
import fadeout from "../../Hooks/Fadeout";

const Section2 = () => {
  return (
    <>
      <S.MainSection className="fade">
        <S.TitleSection2>
          <S.MainTitle2>어떤 하루를<br/>보내실 건가요?</S.MainTitle2>
        </S.TitleSection2>
        <S.ImgSection>
          <Fade left><img src={Hand} className="Hand" alt="hand"/></Fade>
          <Fade top><img src={Phone} className="Phone" alt="phone"/></Fade>
        </S.ImgSection>
        <S.TitleSection>
          <S.MainTitle>어떤 하루를<br/>보내실 건가요?</S.MainTitle>
          <S.SubTitle>
            일정을 추가해보세요.<br/>
            약속된 일정에 늦지 않도록,<br/>
            저희가 미리 알려줄게요.
          </S.SubTitle>
        </S.TitleSection>
      </S.MainSection>
      <S.SubSection>
          일정추가, 하나도 어렵지 않아요.<br/>
          시간과 장소.<br/>
          그리고, 설명이면 충분해요.
      </S.SubSection>
    </>
  );
};

export default Section2;