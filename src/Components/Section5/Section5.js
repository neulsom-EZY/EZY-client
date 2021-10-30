import React from 'react';
import * as S from './style';
import Fade from "react-reveal/Fade";

const Section5 = () => {
  return (
      <>
        <S.MainSection className="fade">
          <S.TitleSection>
            <S.MainTitle>
              자신만의 라이프스타일 <br/>
              역사를 쓰고 있습니다.
            </S.MainTitle>
            <S.MainTitle2>
              자신만의, <br/>
              라이프스타일 <br/>
              역사를 쓰고 있습니다.
            </S.MainTitle2>
          </S.TitleSection>
          <S.ReviewSection>
            <S.LeftSection>
              <Fade bottom>
                <S.Review1>
                  <S.ReviewTitle>
                    팀 일정을 팀원 모두가 <br/>
                    알 수 있어서 소통이 잘 돼요 !! <br/>
                  </S.ReviewTitle>
                  <S.BtnWrapper>
                    <S.ReviewBtn1>
                      #팀일정
                    </S.ReviewBtn1>
                  </S.BtnWrapper>
                </S.Review1>
              </Fade>
              <Fade right>
                <S.Review2>
                  <S.ReviewTitle>
                    친구 생일 파티할 때 <br/>
                    케이크를 깜빡한 적이 있는데, <br/>
                    약속 장소로 오던 다른 친구에게 부탁할 수 있었어요.
                  </S.ReviewTitle>
                  <S.BtnWrapper>
                    <S.ReviewBtn2 className="ReviewBtn2">
                      #심부름
                    </S.ReviewBtn2>
                  </S.BtnWrapper>
                </S.Review2>
              </Fade>
              <Fade left>
                <S.Review3>
                  <S.ReviewTitle>
                    여러명이서도 계획한 일정들을 <br/>
                    간편하게 공유하고, 확인할 수 있어서 좋았습니다.
                  </S.ReviewTitle>
                  <S.BtnWrapper>
                    <S.ReviewBtn1 className="ReviewBtn3">
                      #팀일정
                    </S.ReviewBtn1>
                  </S.BtnWrapper>
                </S.Review3>
              </Fade>
            </S.LeftSection>
            <S.RightSection>
              <Fade top>
                <S.Review4>
                  <S.ReviewTitle>
                    알아서 시간에 맞춰서 일정을 알려주니까 <br/>
                    깜빡하지 않아서 좋아요.
                  </S.ReviewTitle>
                  <S.BtnWrapper>
                    <S.ReviewBtn3 className="ReviewBtn4">
                      #일정관리
                    </S.ReviewBtn3>
                  </S.BtnWrapper>
                </S.Review4>
              </Fade>
              <Fade right>
                <S.Review5>
                  <S.ReviewTitle>
                    친구 부려먹기가 너무 좋네요 :)
                  </S.ReviewTitle>
                  <S.BtnWrapper>
                    <S.ReviewBtn2 className="ReviewBtn5">
                      #심부름
                    </S.ReviewBtn2>
                  </S.BtnWrapper>
                </S.Review5>
              </Fade>
            </S.RightSection>
          </S.ReviewSection>
          <S.BgCircle/>
          <S.BgCircle2/>
          <S.BgCircle3/>
        </S.MainSection>
      </>
  )
}

export default Section5;