import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';
import GroupSchedule from "../../Assets/Section3/GroupSchedule.png";
import Hand from "../../Assets/Section3/Hand.png";

const Section3 = () => {
  return (
      <>
        <S.MainSection className="fade">
          <S.TitleSection2>
            <S.MainTitle2>그리고, <br/>우리의 일정</S.MainTitle2>
          </S.TitleSection2>
          <S.ImgSection>
            <img src={Hand} className="Hand" alt="Hand"/>
            <img src={GroupSchedule} className="Schedule" alt="GroupSchedule-Ui-Img"/>
          </S.ImgSection>
          <S.TitleSection>
            <S.MainTitle>그리고, 우리의 일정</S.MainTitle>
            <S.SubTitle>
              일정을 함께하는 사람을 추가해 보세요. <br/>
              자주 함께하는 사람들을 <br/>
              그룹으로 추가할 수도 있답니다.
            </S.SubTitle>
            <img src={GroupSchedule} className="Schedule2" alt="GroupSchedule-Ui-Img"/>
            <S.IconSection>
              <S.IconTextSection><I.S3Icon1 className="Icon1"/>
                2021. 05. 09 화요일
              </S.IconTextSection>
              <S.IconTextSection><I.S3Icon2 className="Icon2"/>
                11:00 AM - 1:00 PM
              </S.IconTextSection>
              <S.IconTextSection><I.S3Icon3 className="Icon3"/>
                송정역 이디야 카페
              </S.IconTextSection>
            </S.IconSection>
          </S.TitleSection>
        </S.MainSection>
        <S.SubSection>
          <S.SubTitle2>
            그룹에 사람들을 추가하여 <br/>
            나와 함께할 일정, <br/>
            우리의 일정을 완성해 봐요.
          </S.SubTitle2>
        </S.SubSection>
      </>
  );
}

export default Section3;