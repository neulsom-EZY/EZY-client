import React from "react";
import '../../Hooks/Fadeout';
import * as S from "./style";
import * as I from "../../Assets/index";
import Fade from "react-reveal/Fade";

const Section1 = () => {
  return (
    <>
      <S.MainSection className="fade">
        <S.MobileSection>
          <S.MobileLogoSection>
            <I.MobileLogo className="M-Logo" />
          </S.MobileLogoSection>
          <S.MobileImgSection>
            <I.MobilePhone className="M-Phone fade" />
          </S.MobileImgSection>
        </S.MobileSection>
        <S.TitleSection>
          <I.WebLogo className="W-Logo" />
          <S.MainTitle>
            라이프스타일,<br/>
            그 이상의 역사를 만들고 있습니다
          </S.MainTitle>
          <S.SubTitle>
            우리는 EZY입니다<br/>
            오직 여러분만을 위한 개인 맞춤형 일정관리 서비스를 이용하여<br/>
            효율적으로, 효과적으로 계획한 일정을 진행해보세요 !
          </S.SubTitle>
          <I.WebStoreBtn className="W-StoreBtn" />
          <I.MobileStoreBtn className="M-StoreBtn" />
        </S.TitleSection>
        <S.MainBg className="fade">
          <Fade right>            
            <I.WebPhone className="W-Phone" />
            <I.Img3 className="SubPhone" />
            <I.P2 className="P2" />
          </Fade>
        </S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;
