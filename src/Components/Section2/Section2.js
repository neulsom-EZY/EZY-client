import React from 'react';
import Fade from 'react-reveal/Fade';
import * as S from './style';

const Section2 = () => {
  return (
    <>
      <S.MainSection className="fade">
        <S.TitleSection>
          <S.MainTitle>
            나를 위한 일정관리<br />
            그 처음과 끝
          </S.MainTitle>
          <S.SubTitle>
            밝은 하루를 계획<br />
            수고한 오늘 하루의 끝을<br />
            EZY와 함께
          </S.SubTitle>
        </S.TitleSection>
        <S.ImgSection className="fade">
          <Fade right>
            <img src={require('../../Assets/Section2/Alert.png' )} className="Alert" alt="Alert-Phone-Img" />
            <img src={require('../../Assets/Section2/SomeDay.png' )} className="SomeDay" alt="SomeDay-PHone-Img"/>
            <S.AlertImgSection>
              <img src={require('../../Assets/Section2/Block-1.png')} className="Block-1" alt="Block-Img" />
              <img src={require('../../Assets/Section2/Block-2.png')} className="Block-2" alt="Block-Img" />
              <img src={require('../../Assets/Section2/Block-3.png')} className="Block-3" alt="Block-Img" />
              <img src={require('../../Assets/Section2/Block-4.png')} className="Block-4" alt="Block-Img" />
            </S.AlertImgSection>
          </Fade>
        </S.ImgSection>
        <S.SubTitle2>
          밝은 하루를 계획,<br />
          수고한 오늘 하루의 끝,<br />
          EZY와 함께.
        </S.SubTitle2>
      </S.MainSection>
    </>
  );
}

export default Section2;