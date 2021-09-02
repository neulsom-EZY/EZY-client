import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';
import Fade from 'react-reveal/Fade';
import {PhoneImgSection} from "./style";
import M_Phone2 from "../../Assets/MobilePhone2.png";

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
              <S.MobileImgSection>
                <img src={M_Phone2} className="M_Phone2" alt={M_Phone2}></img>
              </S.MobileImgSection>
               <S.AlertImgSection>
                 <I.Content1 />
                 <I.Content2 />
                 <I.Content3 />
                 <S.Content4><I.Content4 /></S.Content4>
               </S.AlertImgSection>
            </PhoneImgSection>
            <I.WebAlertPhone className="W-Alert-Phone" />
          </Fade>
          <S.SubTitle2>
            밝은 하루를 계획,<br />
            수고한 오늘 하루의 끝,<br />
            EZY와 함께.
          </S.SubTitle2>
        </S.ImgSection>
      </S.MainSection>
    </>
  );
}

export default Section2;