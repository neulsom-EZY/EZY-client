import React from "react";
import * as S from "./style";
import Fade from "react-reveal/Fade";
import Phone from "../../Assets/Section1.5/Phone.png";
import Hand from "../../Assets/Section1.5/Hand.png";
import fadeout from "../../Hooks/Fadeout";

const Section1_5 = () => {
  return (
      <>
        <S.MainSection className="fade">
          <S.TitleSection>
            <S.MainTitle>하루의 시작과, 끝</S.MainTitle>
            <S.MainTitle2>
              하루의 <br/>
              시작과, 끝
            </S.MainTitle2>
            <S.SubTitle>
              처음 뵙겠습니다. <br/>
              세상에 없던 일정관리 서비스 <br/>
              EZY, 이지입니다.
            </S.SubTitle>
          </S.TitleSection>
          <S.ImgSection>
            <Fade top><img src={Phone} className="Phone" alt="phone"/></Fade>
            <Fade right><img src={Hand} className="Hand" alt="hand"/></Fade>
          </S.ImgSection>
          <S.SubTitle2>
            처음 뵙겠습니다. <br/>
            세상에 없던 일정관리 서비스 <br/>
            <strong>EZY</strong>, 이지입니다.
          </S.SubTitle2>
        </S.MainSection>
        <S.SubSection>
          <S.MainTitle3>
            이지는 나의 일정 뿐만 아니라, <br/>
            나와 함께하는 우리의 일정과, 심부름 같은 <br/>
            세상에 없던 일정관리 경험을 제공합니다.
          </S.MainTitle3>
        </S.SubSection>
      </>
  )
}

export default Section1_5;