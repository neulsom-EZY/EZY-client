import React from 'react';
import * as S from './style';
import * as I from '../../Assets/index';
import Fade from 'react-reveal/Fade';

const Section1 = () => {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.WLogo><I.Logo/></S.WLogo>
            <S.MainTitle>
              " 소중한 시간을 계획적으로 쓰고 싶다면 "
            </S.MainTitle>
              <S.SubTitle>
                우리는 EZY입니다 💡<br/>
                오직 여러분만을 위한 개인 맞춤형 일정관리 서비스를 이용하여<br/>
                효율적으로, 효과적으로 계획한 일정을 진행해보세요 ! 
              </S.SubTitle>
            <S.Img2><I.Img2/></S.Img2>
            {/* App Store button */}
          </S.TitleSection>
          <Fade right>
            {/* Main Phone image */}
            <S.Img1><I.Img1 className="MainPhone"/></S.Img1>
            <S.Img3><I.Img3 className="SubPhone"/></S.Img3>
          </Fade>
      </S.MainSection>
    </>
  );
};

export default Section1;