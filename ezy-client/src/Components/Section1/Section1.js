import React from "react";
import * as S from "./style";
import Bg01 from '../../Assets/bg01-full.png';
import Bg02 from '../../Assets/bg02-full.png';
import Bg03 from '../../Assets/bg03.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Section1 = () => {
  return(
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.MainTitle className="slider">
          <Zoom>EZY</Zoom>
            <S.SubTitle>
		          <div className="text-box">
			          <div>자신만의 라이프스타일 역사를 쓰고 있습니다.</div>
			          <div>여러분이 더 가치있는 삶을 살 수 있도록.</div>
			          <div>라이프스타일을 혁신하며 우리를 변화시켜갑니다.</div>
		          </div>
            </S.SubTitle>
          </S.MainTitle>
        </S.TitleSection>
        <S.MainBg>
        <Fade right>
          <img className="Bg01" src={Bg01} alt="bg01"/>
          <img className="Bg02" src={Bg02} alt="bg02"/>
          <img className="Bg03" src={Bg03} alt="bg03"/>
        </Fade>
        </S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;