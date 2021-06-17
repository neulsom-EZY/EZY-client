import React from 'react';
import * as S from "./style";
import Bg11 from '../../Assets/bg11.png'
import jquery from '../Section1/Jquery';

const Section2 = () =>  {
  return (
    <>
      <S.MainSection>
        <jquery/>
        <S.MainBg className="fade">
          <img className="Bg11" src={Bg11} alt="bg11"/>
        </S.MainBg>
        <S.TitleSection>
          <S.MainTitle>
            소중한 시간을 계획적으로 쓰고싶다면
          </S.MainTitle>
        </S.TitleSection>
      </S.MainSection>
    </>
  )
}

export default Section2;