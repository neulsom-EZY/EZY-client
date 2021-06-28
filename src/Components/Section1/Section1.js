import React from 'react';
import * as S from './style';
import Img01 from '../../Assets/Img01.png';
import Img02 from '../../Assets/Img02.png';

const Section1 = () => {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.MainTitle>
            " 소중한 시간을 계획적으로 쓰고 싶다면 "
          </S.MainTitle>
          <S.SubTitle>
            우리는 EZY입니다 💡<br/>
            오직 여러분만을 위한 개인 맞춤형 일정관리 서비스를 이용하여<br/>
            효율적으로, 효과적으로 계획한 일정을 진행해보세요 ! 
          </S.SubTitle>
        <img className="Img02" src={Img02} alt="Img02" />
        </S.TitleSection>
        <img className="Img01" src={Img01} alt="Img01" />
      </S.MainSection>
    </>
  );
};

export default Section1;