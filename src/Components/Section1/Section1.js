import React from 'react';
import * as S from './style';
import * as I from '../../Assets/index';
import Mobile from '../../Assets/Mobile.png';
import Btn from '../../Assets/Btn.svg';
import Fade from 'react-reveal/Fade';
import fadeout from "../../Hooks/Fadeout";
import P1 from "../../Assets/Phone.svg";
import P2 from "../../Assets/Phone2.svg";
import Logo from "../../Assets/PageLogo.svg";

const Section1 = () => {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
        {/* <S.WLogo><I.Logo/></S.WLogo> EZY 글자 들어간 로고 */}
          <img src={ Mobile } className="Mobile" alt="Mobile"/>
          <img src={ Logo } className="Logo" alt="Logo"/>
            <S.MainTitle>라이프스타일,<br/>
              그 이상의 역사를 만들고 있습니다</S.MainTitle>
              <S.SubTitle>
                우리는 EZY입니다<br/>
                오직 여러분만을 위한 개인 맞춤형 일정관리 서비스를 이용하여<br/>
                효율적으로, 효과적으로 계획한 일정을 진행해보세요 !
              </S.SubTitle>
          <img src={ Btn } className="StoreBtn" alt="StoreBtn"/>
          </S.TitleSection>
          <fadeout />
          <S.MainBg>
            <Fade right>
            <S.Img1 className="fade">
                <img src={ P1 } className="P1 fade" alt="Phone"/>
                <I.Img3 className="SubPhone"/>
                <img src={ P2 } className="P2 fade" alt="Phone2"/>
              </S.Img1>
            </Fade>
          </S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;