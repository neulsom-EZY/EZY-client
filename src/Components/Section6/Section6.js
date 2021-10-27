import React from 'react';
import * as S from './style';
import Phone from "../../Assets/Section6/Phone.png";
import Hand from "../../Assets/Section6/Hand.png";

const Section6 = () => {
  return(
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.MainTitle>
            라이프스타일 혁신을 위해 <br/>
            끝 없이 성장하고, 한 없이 도전합니다.
          </S.MainTitle>
        </S.TitleSection>
        <S.ImgSection>
          <img src={Phone} className="Phone" alt="Phone" />
          <img src={Hand} className="Hand" alt="Hand" />
        </S.ImgSection>
      </S.MainSection>
      <S.SubSection>
        <S.MainTitle2>
          이지는 여러분 모두의 <br/>
          라이프스타일을 혁신하게 되는 그날까지. <br/>
          끝 없이 성장하고, 한 없이 도전합니다.
        </S.MainTitle2>
      </S.SubSection>
    </>
  )
}

export default Section6;