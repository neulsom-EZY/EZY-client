import React from "react";
import { MainBg, MainTitle, MainSection, SubTitle, TitleSection } from "./style";
import Bg01 from '../../Assets/bg01.png';

const Section1 = () => {
  return(
    <>
      <MainSection>
        <TitleSection>
          <MainTitle>
            EZY
            <SubTitle>EZY는 자기 자신만의 라이프 스타일 역사를 쓰고 있습니다 😎</SubTitle>  
          </MainTitle>
        </TitleSection>
        <MainBg><img className="Bg01" src={Bg01}/></MainBg>
      </MainSection>
    </>
  );
};

export default Section1;