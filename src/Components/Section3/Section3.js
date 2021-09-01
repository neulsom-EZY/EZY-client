import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';
import GroupSchedule from "../../Assets/Section3/GroupSchedule.png";

const Section3 = () => {
  return(
    <>
      <S.MainSection className="fade">
        <S.ImgSection>
          <img src={GroupSchedule} className="Schedule" alt="GroupSchedule-Ui-Img" />
        </S.ImgSection>
        <S.TitleSection>
          <S.MainTitle>그리고, 우리의 일정</S.MainTitle>
            <S.SubTitle>
              그룹에 사람들을 추가하여 나와 함께한 일정, <br/>
              우리의 일정을 완성해봐요
            </S.SubTitle>
              <S.IconSection>
                <S.IconTextSection><I.S3Icon1 className="Hello"/>
                  2021. 05. 09 화요일
                </S.IconTextSection>
                <S.IconTextSection><I.S3Icon2 className="Hello"/>
                  11:00 AM - 1:00 PM
                </S.IconTextSection>
                <S.IconTextSection><I.S3Icon3 className="Hello"/>
                  송정역 이디야 카페
                </S.IconTextSection>
              </S.IconSection>
        </S.TitleSection>
      </S.MainSection>
    </>
  )
}

export default Section3;