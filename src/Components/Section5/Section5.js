import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';

const Section5 = () => {
    return(
        <>
            <S.MainSection className="fade">
                <S.TitleSection>
                    <S.MainTitle>
                        자신만의 라이프스타일<br/>
                        역사를 쓰고 있습니다.
                    </S.MainTitle>
                </S.TitleSection>
                <S.ReviewSection>
                    <S.Review1>
                        <S.ReviewTitle>
                            팀 일정을 팀원 모두가<br/>
                            알 수 있어서 소통이 잘 돼요!!
                        </S.ReviewTitle>
                        <S.ReviewBtn1>
                            <S.BtnTitle>
                                #팀일정
                            </S.BtnTitle>
                        </S.ReviewBtn1>
                    </S.Review1>
                    <S.Review2>
                        <S.ReviewTitle>
                        알아서 시간에 맞춰서 일정을 알려주니까<br/>
                        깜빡하지 않아서 좋아요
                        </S.ReviewTitle>
                        <S.ReviewBtn2>
                            <S.BtnTitle>
                                #일정관리
                            </S.BtnTitle>
                        </S.ReviewBtn2>
                    </S.Review2>
                    <S.Review3>
                        <S.ReviewTitle>
                            친구 생일 파티할 때<br/>
                            케이크를 깜빡한 적이 있는데,<br/>
                            약속 장소로 오던 다른 친구에게 부탁할 수 있었어요
                        </S.ReviewTitle>
                        <S.ReviewBtn3>
                            <S.BtnTitle>
                                #심부름
                            </S.BtnTitle>
                        </S.ReviewBtn3>
                    </S.Review3>
                    <S.Review4>
                        <S.ReviewTitle>
                            여러명이서도 계획한 일정들을<br/>
                            간편하게 공유하고, 확인할 수 있어서 좋았습니다.
                        </S.ReviewTitle>
                        <S.ReviewBtn4>
                            <S.BtnTitle>
                                #팀일정
                            </S.BtnTitle>
                        </S.ReviewBtn4>
                    </S.Review4>
                    <S.Review5>
                        <S.ReviewTitle>
                            친구 부려먹기가 너무 좋네요 :)
                        </S.ReviewTitle>
                        <S.ReviewBtn3>
                            <S.BtnTitle>
                                #심부름
                            </S.BtnTitle>
                        </S.ReviewBtn3>
                    </S.Review5>
                    <S.BgCircle/>
                </S.ReviewSection>
            </S.MainSection>
        </>
    )
}

export default Section5;