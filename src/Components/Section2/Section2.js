import React from 'react';
import * as S from './style';
import W_SomeDay from '../../Assets/WebSomeDay.svg';
import W_Alert from '../../Assets/WebAlert.svg';
import W_AlertPhone from '../../Assets/AlertPhoneImg.svg';
import fadeout from "../../Hooks/Fadeout";
import Scroll from "../../Hooks/Scroll";
import Fade from 'react-reveal/Fade';
import One from '../../Assets/Alert-1.svg';
import Two from '../../Assets/Alert-1.svg';
import Three from '../../Assets/Alert-3.svg';

const Section2 = () => {
  return (
    <>
      <S.MainSection className="fade">
        <S.TitleSection>
          <S.MainTitle>
            나를 위한 일정관리,<br/>
            그 처음과 끝
            <S.SubTitle>
              EZY로 계획하는 오늘 하루의 시작<br/>
              EZY로 마무리하는 오늘 하루
            </S.SubTitle>
          </S.MainTitle>
        </S.TitleSection>
        <fadeout />
        <S.ImgSection className="fade">
          <Fade right>
            <img src={W_Alert} className="W-Alert" alt="Alert-img"></img>
            <img src={W_SomeDay} className="W-SomeDay" alt="Someday-img"></img>
          <S.AlertImgSection>
          <img src={One} className="One" alt="Alert-Phone-Img"></img>
            <div id="box">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
              <div class="item">4</div>
              <div class="item">5</div>
            </div>
          </S.AlertImgSection>
            <img src={W_AlertPhone} className="W-Alert-Phone" alt="Alert-Phone-Img"></img>
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