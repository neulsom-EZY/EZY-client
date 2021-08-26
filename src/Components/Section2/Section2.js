import React from 'react';
import Fade from 'react-reveal/Fade';
import * as S from './style';
import Alert from '../../Assets/Section2/Alert.png';
import SomeDay from '../../Assets/Section2/SomeDay.png';
import Block1 from '../../Assets/Section2/Block-1.png';
import Block2 from '../../Assets/Section2/Block-2.png';
import Block3 from '../../Assets/Section2/Block-3.png';
import Block4 from '../../Assets/Section2/Block-4.png';

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
            <img src={Alert} className="Alert" alt="Alert-Phone-Image" />
            <img src={SomeDay} className="SomeDay" alt="SomeDay-PHone-Image" />
            <S.AlertImgSection>
              <img src={Block1} className="Block-1" alt="Block-Image" />
              <img src={Block2} className="Block-2" alt="Block-Image" />
              <img src={Block3} className="Block-3" alt="Block-Image" />
              <img src={Block4} className="Block-4" alt="Block-Image" />
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