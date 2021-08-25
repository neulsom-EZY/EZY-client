import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';
import Fade from 'react-reveal/Fade';
import {PhoneImgSection} from "./style";

const Section2 = () => {
  return (
    <>
      <S.MainSection className="fade">
        <S.TitleSection>
          <S.MainTitle>
            나를 위한 일정관리<br />
            그 처음과 끝
            <S.SubTitle>
              밝은 하루를 계획<br />
              수고한 오늘 하루의 끝을<br />
              EZY와 함께
            </S.SubTitle>
          </S.MainTitle>
        </S.TitleSection>
        <S.ImgSection className="fade">
          <Fade right>
            <PhoneImgSection>
              <I.WebAlert className="W-Alert"/>
              <I.WebSomeDay className="W-SomeDay"/>
               <S.AlertImgSection>
                 <I.Content1 />
                 <I.Content2 />
                 <I.Content3 />
                 <I.Content4 />
               </S.AlertImgSection>
            </PhoneImgSection>
            <I.WebAlertPhone className="W-Alert-Phone" />
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