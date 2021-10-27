import React from 'react';
import * as S from './style';
import Fade from 'react-reveal/Fade';
import Top from '../../Assets/Section4/Top.png';
import Bottom from '../../Assets/Section4/Bottom.png';

const Section4 = () => {
  return (
      <>
        <S.MainSection className="fade">
          <Fade right>
            <S.TitleSection>
              <S.MainTitle>오직 당신만을 위한 <br/>일정관리 서비스, <br/>처음일거에요</S.MainTitle>
            </S.TitleSection>
            <S.ImgSection>
              <S.FirstSection>
                <S.SubTitle>언제든지 <br/>간편한 일정관리</S.SubTitle>
                {/*<img src={Top} className="Top" alt="SomeDay-Ui-Img"/>*/}
              </S.FirstSection>
              <S.SecondSection>
                <S.SubSection>
                  {/*<img src={Bottom} className="Bottom" alt="SomeDay-Ui-Img"/>*/}
                  <S.SubTitle4>오늘의 일정을 <br/>간단하게 확인</S.SubTitle4>
                </S.SubSection>
                <S.SubSection2>
                  <S.SubSection3>
                    <S.Emoji>😑</S.Emoji>
                    <S.SubTitle2>일정을<br/>눈감고도<br/>확인</S.SubTitle2>
                  </S.SubSection3>
                  <S.SubSection4>
                    <S.Emoji>👀</S.Emoji>
                    <S.SubTitle3>이제 눈 떠요!</S.SubTitle3>
                  </S.SubSection4>
                </S.SubSection2>
              </S.SecondSection>
            </S.ImgSection>
          </Fade>
        </S.MainSection>
      </>
  );
}

export default Section4;
