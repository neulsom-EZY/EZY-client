import React from "react";
import * as S from "./style";
import StoreBtn from "../../Assets/Section7/StoreBtn.png";

const Section1 = () => {
  return (
      <>
        <S.MainSection>
            <S.TitleSection>
                <S.MainTitle>
                    세상에 없던 일정관리, EZY를 만나보세요.
                </S.MainTitle>
                <S.ImgSection>
                    <img src={StoreBtn} />
                </S.ImgSection>
            </S.TitleSection>
        </S.MainSection>
        <S.SubSection>
            <S.Line></S.Line>
            <S.LineText>
                © neulsom EZY team. <br />
                @ officialneulsom@gmail.com
            </S.LineText>
        </S.SubSection>
      </>
  );
}

export default Section1;