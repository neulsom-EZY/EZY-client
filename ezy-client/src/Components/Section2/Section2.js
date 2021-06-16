import React from 'react';
import * as S from "./style";
import Bg11 from '../../Assets/bg11.png';
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';

const Section2 = () =>  {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
            <S.TitleSection>
              안녕하세요
            </S.TitleSection>
        </S.TitleSection>
        <S.MainBg>
        <img className="Bg11" src={Bg11} alt="bg11"/>
      </S.MainBg>
      </S.MainSection>
    </>
  )
}

export default Section2;