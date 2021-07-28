import React from 'react';
import * as S from './style';
import SomeDay from '../../Assets/SomeDay.png';
import Alert from '../../Assets/Alert.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Section2 = () => {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.MainTitle>
            나를 위한 일정관리, 그 처음과 끝
            <S.SubTitle>
              EZY로 계획하는 오늘 하루의 시작<br/>
              EZY로 마무리하는 오늘 하루
            </S.SubTitle>
          </S.MainTitle>
        </S.TitleSection>
        <S.ImgSection>
          <ScrollAnimation animateIn="fadeIn">
          <img src={Alert} className="Alert" alt="Alert-image"></img>
          <img src={SomeDay} className="SomeDay" alt="Someday-image"></img>
          </ScrollAnimation>
        </S.ImgSection>
      </S.MainSection>

    </>
  );
}

export default Section2;