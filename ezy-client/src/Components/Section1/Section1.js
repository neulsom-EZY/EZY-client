import React from "react";
import * as S from "./style";
import Bg01 from '../../Assets/bg01.png';
import Bg02 from '../../Assets/bg02.png';
import Bg03 from '../../Assets/bg03.png';

const Section1 = () => {
  return(
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.MainTitle className="slider">EZY
            <S.SubTitle>
		          <div class="text-box">
			          <div>자신만의 라이프스타일 역사를 쓰고 있습니다.</div>
			          <div>여러분이 더 가치있는 삶을 살 수 있도록.</div>
			          <div>라이프스타일을 혁신하며 우리를 변화시켜갑니다.</div>
		          </div>
            </S.SubTitle>
          </S.MainTitle>
        </S.TitleSection>
        <S.MainBg>
        <img className="Bg01" src={Bg01}/>
        <img className="Bg02" src={Bg02}/>
        <img className="Bg03" src={Bg03}/>
        </S.MainBg>
      </S.MainSection>
    </>
  );
};

export default Section1;