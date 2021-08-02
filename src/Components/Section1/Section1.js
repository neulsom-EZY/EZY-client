import React from "react";
import * as S from "./style";
import * as I from "../../Assets/index";
import Fade from "react-reveal/Fade";
import fadeout from "../../Hooks/Fadeout";
import W_Logo from "../../Assets/WebLogo.svg";
import W_Phone from "../../Assets/WebPhone.svg";
import M_Logo from "../../Assets/MobileLogo.svg";
import M_Phone from "../../Assets/MobilePhone.png";
import StoreBtn from "../../Assets/StoreBtn.svg";

const Section1 = () => {
  return (
    <>
      <S.MainSection>
        <S.MobileSection>
          <S.MobileLogoSection>
            <img src={M_Logo} className="M-Logo" alt="Mobile-Logo" />
          </S.MobileLogoSection>
          <S.MobileImgSection>
            <img src={M_Phone} className="M-Phone" alt="Mobile-Phone" />
          </S.MobileImgSection>
        </S.MobileSection>
        <S.TitleSection>
          <img src={W_Logo} className="W-Logo" alt="Web-Logo" />
          <S.MainTitle>
            라이프스타일,<br/>
            그 이상의 역사를 만들고 있습니다
          </S.MainTitle>
          <S.SubTitle>
            우리는 EZY입니다<br/>
            오직 여러분만을 위한 개인 맞춤형 일정관리 서비스를 이용하여<br/>
            효율적으로, 효과적으로 계획한 일정을 진행해보세요 !
          </S.SubTitle>
          {/* <I.Btn className="StoreBtn" /> */}
          <img src={StoreBtn} className="StoreBtn" alt="Web-Phone" />
        </S.TitleSection>
        <fadeout />
        <S.MainBg className="fade">
          <Fade right>
            <img src={W_Phone} className="W-Phone" alt="Web-Phone" />
            <I.Img3 className="SubPhone" />
            <I.P2 className="P2" />
          </Fade>
        </S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;
