import React from 'react';
import * as S from './style';
import Phone from "../../Assets/Section6/Phone.png";
import Hand from "../../Assets/Section6/Hand.png";
import Fade from "react-reveal/Fade";

const Section6 = () => {
  return (
      <>
        <S.MainSection>
          <S.TitleSection className="fade">
            <S.MainTitle>
              라이프스타일 혁신을 위해 <br/>
              끝 없이 성장하고, <br/>한 없이 도전합니다.
            </S.MainTitle>
            <S.MainTitle2>
              라이프스타일 혁신을 위해 <br/>
              끝 없이 성장하고, <br/>
              한 없이 도전합니다.
            </S.MainTitle2>
          </S.TitleSection>
          <S.ImgSection>
            <Fade left>
              <img src={Phone} className="Phone" alt="Phone"/>
            </Fade>
            <Fade right>
              <img src={Hand} className="Hand" alt="Hand"/>
            </Fade>
          </S.ImgSection>
          <S.TitleSection>
            <S.SubTitle>
              이지는 여러분 모두의 <br/>
              라이프스타일을 혁신하게 되는 그날까지. <br/>
              끝 없이 성장하고, 한 없이 도전합니다.
            </S.SubTitle>
          </S.TitleSection>
        </S.MainSection>
      </>
  )
}

export default Section6;