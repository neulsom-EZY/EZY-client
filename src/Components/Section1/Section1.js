import React from 'react';
import * as S from './style';
import * as I from '../../Assets/index';
import Mobile from '../../Assets/Mobile.png';
import StoreBtn from '../../Assets/StoreBtn.png';
import Fade from 'react-reveal/Fade';
import fadeout from "../../Hooks/Fadeout";
import P1 from "../../Assets/Phone1.png";

const Section1 = () => {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.WLogo><I.Logo/></S.WLogo>
          <img src={ Mobile } className="Mobile" alt="Mobile"/>
            <S.MainTitle>시간, 그 이상의 가치를 바라봅니다.</S.MainTitle>
              <S.SubTitle>
                우리는 EZY입니다 💡<br/>
                오직 여러분만을 위한 개인 맞춤형 일정관리 서비스를 이용하여<br/>
                효율적으로, 효과적으로 계획한 일정을 진행해보세요 !
              </S.SubTitle>
            <S.Img2><I.Img2/></S.Img2>
          <img src={ StoreBtn } className="StoreBtn" alt="StoreBtn"/>
          </S.TitleSection>
          <fadeout />
          <S.MainBg>
            <Fade right>
              <S.Img1 className="fade">
                <img src={ P1 } className="P1" alt="Phone"/>
                <I.Img3 className="SubPhone"/>
                <I.Img4 className="SubSubPhone"/>
              </S.Img1>
            </Fade>
          </S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;