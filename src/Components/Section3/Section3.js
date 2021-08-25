import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';

const Section3 = () => {
  return(
    <>
      <S.MainSection className="fade">
        <S.ImgSection>
          <I.S3Phone />
        </S.ImgSection>
        <S.TitleSection>
          <S.MainTitle>
            그리고, 우리의 일정
            <S.SubTitle>
              그룹에 사람들을 추가하여 나와 함께한 일정, <br/>
              우리의 일정을 완성해봐요
            </S.SubTitle>
            <S.IconSection>
              <S.IconWrapper>
                <I.S3Icon1/> 2021. 05. 09 화요일
              </S.IconWrapper>
              <S.IconWrapper>
                <I.S3Icon2/> 11:00 AM - 1:00 PM
              </S.IconWrapper>       
              <S.IconWrapper>
                <I.S3Icon3/> 송정역 이디야 카페
              </S.IconWrapper>
            </S.IconSection>
          </S.MainTitle>
        </S.TitleSection>
      </S.MainSection>
    </>
  )
}

export default Section3;