import React from 'react';
import * as S from './style';
import Phone from "../../Assets/Section3.5/phone.png";
import Hand from "../../Assets/Section3.5/hand.png";
import Fade from "react-reveal/Fade";
import fadeout from "../../Hooks/Fadeout";

const Section3_5 = () => {
  return (
      <>
        <S.MainSection className="fade">
          <S.TitleSection>
            <S.MainTitle>
              세상에서 가장 공손한 <br/>
              심부름 요청
            </S.MainTitle>
            <S.ImgSection2>
              <Fade left>
                <img src={Phone} className="Phone" alt="phone"/>
              </Fade>
              <Fade right>
                <img src={Hand} className="Hand" alt="hand"/>
              </Fade>
            </S.ImgSection2>
            <S.SubTitle>
              이지를 사용하고 있다면 <br/>
              서로 심부름을 요청할 수 있어요. <br/>
              언제, 어디서, 어떤 심부름인지 <br/>
              한눈에 확인해 봐요.
            </S.SubTitle>
          </S.TitleSection>
          <S.ImgSection>
            <Fade left>
              <img src={Phone} className="Phone" alt="phone"/>
            </Fade>
            <Fade right>
              <img src={Hand} className="Hand" alt="hand"/>
            </Fade>
          </S.ImgSection>
        </S.MainSection>
        <S.SubSection>
          혹시나, 깜빡할 걱정하지 말아요. <br/>
          정해진 시간 전에 미리 알려줄게요.
        </S.SubSection>
      </>
  )
};

export default Section3_5;
