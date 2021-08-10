import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';
import Fade from 'react-reveal/Fade';

const Section2 = () => {
  return (
    <>
      <S.MainSection className="fade">
        <S.TitleSection>
          <S.MainTitle>
            나를 위한 일정관리, 그 처음과 끝
            <S.SubTitle>
              EZY로 계획하는 오늘 하루의 시작<br/>
              EZY로 마무리하는 오늘 하루
            </S.SubTitle>
          </S.MainTitle>
        </S.TitleSection>
        <S.ImgSection className="fade">
          <Fade right>
            <I.WebAlert className="W-Alert"/>
            <S.WebSomeDay><I.WebSomeDay className="W-SomeDay"/></S.WebSomeDay>
            <S.AlertImgSection>
              <I.Content1 />
              <I.Content2 />
              <I.Content3 />
              <I.Content4 />
            </S.AlertImgSection>
            <I.WebAlertPhone className="W-Alert-Phone" />
          </Fade>
        </S.ImgSection>
            <S.SubTitle2>
              밝은 하루를 계획,<br/>
              수고한 오늘 하루의 끝,<br/>
              EZY와 함께.
            </S.SubTitle2>
      </S.MainSection>
    </>
  );
}

export default Section2;