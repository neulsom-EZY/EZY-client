import React from "react";
import * as S from "./style";
import Bg01 from '../../Assets/bg01.png';

const Section1 = () => {
  return(
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.MainTitle>
            EZY - Client
            <S.SubTitle>EZY는 자기 자신만의 라이프 스타일 역사를 쓰고 있습니다 😎</S.SubTitle>  
          </S.MainTitle>
        </S.TitleSection>
        <S.MainBg><img className="Bg01" src={Bg01}/></S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;