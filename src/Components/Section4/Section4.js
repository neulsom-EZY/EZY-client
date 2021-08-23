import React from 'react';
import * as I from "../../Assets/index"
import * as S from './style';

const Section4 = () => {
    return(
        <>
            <S.MainSection className="fade">
                <S.TitleSection>
                    <S.MainTitle>
                        오직 당신만을 위한 <br/>
                        이런 TodoList 써보셨나요?
                    </S.MainTitle>
                </S.TitleSection>
                <S.ImgSection>
                    <S.FirstSection>
                        <S.SubTitle>
                            언제던지 <br/>
                            간편한 일정관리
                        </S.SubTitle>
                    </S.FirstSection>
                    <S.SecondSection>
                        <S.SubSection>
                            <S.SubTitle>
                                오늘의 일정을 <br/>
                                간단하게 확인
                            </S.SubTitle>
                        </S.SubSection>
                        <S.SubSection2>
                            <S.SubSection3>
                                <S.Emoji>
                                    😑
                                </S.Emoji>
                                <S.SubTitle2>
                                    일정을<br/>
                                    눈감고도<br/>
                                    확인
                                </S.SubTitle2>
                            </S.SubSection3>
                            <S.SubSection4>
                                <S.Emoji>
                                    👀
                                </S.Emoji>
                                <S.SubTitle3>
                                    이제 눈 떠요!
                                </S.SubTitle3>
                            </S.SubSection4>
                        </S.SubSection2>
                    </S.SecondSection>
                </S.ImgSection>
            </S.MainSection>
        </>
    )
}

export default Section4;