import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    z-index: -100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 700px) {
        width: 100%;
        height: 140vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`;
export const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 15vh;
    word-break: keep-all;
    @media screen and (max-width: 1920px) 
    {  margin-left: 30vh;  }
    @media screen and (max-width: 1800px) 
    {  margin-left: 20vh;  }
    @media screen and (max-width: 1570px) 
    {  margin-left: 12vh;  }
    @media screen and (max-width: 1450px) 
    {  margin-left: 6vh;  }
    @media screen and (max-width: 700px)
    { margin: 0 }
`;
export const MainTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 44px;
    line-height: 8vh;
    color: black;
    @media screen and (max-width: 500px)
    { font-size: 25px }
`;
export const SubTitle = styled.div`
    width: 100%;
    margin-top: 3vh;
    font-size: 22px;
    font-weight: 400;
    line-height: 5vh;
    color: #656565;
    @media screen and (max-width: 700px) 
    {  display: none;  }
`;
export const SubTitle2 = styled.div`
    width: 100%;
    height: 10vh;
    display: none;
    font-size: 22px;
    font-weight: 600;
    line-height: 5vh;
    color: #656565;
    @media screen and (max-width: 700px) {
        text-align: center;
        display: block;
        font-size: 15px;
        line-height: 3vh;
    }
`;
export const ImgSection = styled.div`
    width: 100%;
    height:100%;
    margin-bottom: -5vh;
    margin-right: 5vh;
    display:flex;
    align-items:center;
    justify-content:center;
    .Alert {
      margin-right: -3vh;
      margin-bottom: -8vh;
      width: 36vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    .SomeDay {
      width: 39vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    @media screen and (max-width: 1920px) 
    {  margin-right: 15vh;  }
    @media screen and (max-width: 1800px) 
    {  margin-right: 6vh;  }
    @media screen and (max-width: 1400px) {
        .Alert {  width: 30vh;  }
        .SomeDay {  width: 33vh;  }
        margin-bottom: 2vh;
    }
    @media screen and (max-width: 1040px) 
    {  margin-right: 3vh;  }
    @media screen and (max-width: 1140px) {
      .Alert {  display: none  }
    }
    @media screen and (max-width: 700px) 
    {  margin: 0;  }
`;
export const AlertImgSection = styled.div`
    width: 100%;
    display: flex;
    justify-items: center;
    align-items:center;
    margin-bottom:27vh;
    margin-left: -33vh;
    .Block-1, .Block-2, .Block-3, .Block-4 {
      width: 15vh;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
    }
    @media screen and (max-width: 1400px) {
      margin-bottom: 23vh;
      margin-left: -29vh;
      .Block-1, .Block-2, .Block-3, .Block-4 
      {  width: 13vh  }
    }
    @media screen and (max-width: 1300px) {
      .Block-4 {  display: none  }
    }
    @media screen and (max-width: 1050px) {
      .Block-3 {  display: none  }
    }
`;
export const PhoneImgSection = styled.div`
    width: 100%;
    height: 100vh;
    margin-left: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;  
`;