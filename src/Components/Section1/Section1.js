import React from 'react';
import * as S from './style';
import * as I from '../../Assets/index';
import Fade from 'react-reveal/Fade';
import Mobile from '../../Assets/Mobile.png';
import StoreBtn from '../../Assets/StoreBtn.png';

const Section1 = () => {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.WLogo><I.Logo/></S.WLogo>
          <img src={ Mobile } className="Mobile"/>
            <S.MainTitle>   
              " 시간, 그 이상의 가치를 바라봅니다. "
            </S.MainTitle>
              <S.SubTitle>
                우리는 EZY입니다 💡<br/>
                오직 여러분만을 위한 개인 맞춤형 일정관리 서비스를 이용하여<br/>
                효율적으로, 효과적으로 계획한 일정을 진행해보세요 ! 
              </S.SubTitle>
              {/* Img02 */}{/* App Store button */}
            <S.Img2><I.Img2/></S.Img2>
          <img src={ StoreBtn } className="StoreBtn"/>
          </S.TitleSection>
          <S.MainBg className="fade">
            <Fade right>
              {/* Img01 - 1 */}
              <S.Img1><I.Img1 className="MainPhone"/></S.Img1>
              {/* Img03 - 2 */}
              <S.Img3><I.Img3 className="SubPhone"/></S.Img3>
              {/* Img04 - 3 */}
              <S.Img4><I.Img4 className="SubSubPhone"/></S.Img4>
              {/* 13-inch Display */}
              {/* <I.Img5 className="ResponsivePhone"/> */}
            </Fade>
          </S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;