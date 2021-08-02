import React from 'react';
import * as S from './style';
import * as I from '../../Assets/index';
import SomeDay from '../../Assets/SomeDay.svg';
import Alert from '../../Assets/Alert.svg';
import fadeout from "../../Hooks/Fadeout";
import Fade from 'react-reveal/Fade';

const Section2 = () => {
  return (
    <>
      <S.MainSection>
        <S.TitleSection>
          <S.MainTitle>
            나를 위한 일정관리,<br/>그 처음과 끝
            <S.SubTitle>
              EZY로 계획하는 오늘 하루의 시작<br/>
              EZY로 마무리하는 오늘 하루
            </S.SubTitle>
          </S.MainTitle>
        </S.TitleSection>
        <fadeout />
        <S.ImgSection className="fade">
          <Fade right>
            <img src={Alert} className="Alert" alt="Alert-img"></img>
            <img src={SomeDay} className="SomeDay" alt="Someday-img"></img>
          </Fade>
        </S.ImgSection>
      </S.MainSection>

    </>
  );
}

export default Section2;