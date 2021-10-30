import styled from 'styled-components';

export const MainSection = styled.div`
  width: 100%;
  height: 150vh;
  z-index: -100;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 800px) {
    margin-top: 30vh;
    height: 100vh;
  }
`;

export const TitleSection = styled.div`
  padding-top: 100px;
  width: 100%;
  margin-left: -15vh;
  word-break: keep-all;
  @media screen and (max-width: 1500px) {
    margin-left: -10vh;
  }
  @media screen and (max-width: 1050px) {
    padding: 0;
    margin-top: -25vh;
    margin-right: 40vh;
    margin-left: 5vh;
  }
  @media screen and (max-width: 800px) {
    margin-left: 22vh;
  }
  @media screen and (max-width: 500px) {
    margin-left: 30vh;
  }
  @media screen and (max-width: 400px) {
    margin-left: 30vh;
  }
  
`;

export const MainTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 55px;
  line-height: 8vh;
  color: black;
  margin-bottom: 10vh;
  @media screen and (max-width: 1050px) {
    display: none;
  }

`;

export const MainTitle2 = styled.div`
  display: none;
  width: 100%;
  font-weight: 700;
  font-size: 45px;
  line-height: 6vh;
  color: black;
  margin-bottom: 20vh;
  @media screen and (max-width: 1050px) {
    display: block;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 3rem;
    margin-bottom: 50vh;
  }
  @media screen and (max-width: 400px) {
    line-height: 6.5vh;
    margin-left: -7vh;
    font-size: 27px;
  }
`;

export const ReviewSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 5vh;
  padding-bottom: ;
  @media screen and (max-width: 1050px) {
    display: grid;
    margin-left: 0;
    margin-top: -15vh;
  }
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-left: -25vh;
    margin-bottom: 8vh;

`;

export const RightSection = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: -10vh;
    margin-bottom: 23vh;
`;

export const BgCircle = styled.div`
  width: 50vh;
  height: 50vh;
  position: absolute;
  margin: -10vh 0 0 -25vh;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;
  z-index: -1;
  @media screen and (max-width: 1050px) {
    top: 30%;
    left: 20%;
    width: 60vh;
    height: 60vh;
  }
  @media screen and (max-width: 800px) {
    width: 45vh;
    height: 45vh;
    top: 20%;
    left: 20%;
  }
  @media screen and (max-width: 500px) {
    width: 996px;
    height: 120vh;
    left: -190px;
    top: 100px;
  }
`;
export const BgCircle2 = styled.div`
  display: none;
  width: 60vh;
  height: 60vh;
  position: absolute;
  margin: -10vh 0 0 -25vh;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;
  z-index: -1;
  @media screen and (max-width: 1050px) {
    display: block;
    left: 50%;
  }
  @media screen and (max-width: 800px) {
    top: 52%;
    left: 100%;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const BgCircle3 = styled.div`
  display: none;
  width: 60vh;
  height: 60vh;
  position: absolute;
  margin: -10vh 0 0 -25vh;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;
  z-index: -1;
  
  @media screen and (max-width: 1050px) {
    display: block;
    top: 70%;
    left: 10%;
  }
  @media screen and (max-width: 800px) {
    top: 80%;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Review1 = styled.div`
    width: 39vh;
    height: 19.78vh;
    margin-left: 20vh;
    background-color: white;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    z-index: 2;
    @media screen and (max-width: 1500px) {
        margin-top: -10vh;
        margin-bottom: 10vh;
    }
    @media screen and (max-width: 1050px) {
        margin: -5vh -50vh 3vh -5vh;
    }
    @media screen and (max-width: 500px) {
        width: 50vh;
        margin-left: 15vh;
        margin-bottom: -2vh;
    }
`;

export const Review2 = styled.div`
  width: 56.5vh;
  height: 25vh;
  margin-top: -3vh;
  margin-left: -25vh;
  background-color: white;
  box-shadow: 0.3vh 0.3vh 3vh #868e96;
  z-index: 1;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const Review3 = styled.div`
    width: 53vh;
    height: 26.3vh;
    margin-left: 15vh;
    margin-right: -10vh;
    background-color: white;
    margin-top: -2vh;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    z-index: 1;
    margin-bottom: 15vh;
    @media screen and (max-width: 1500px) {
        margin-left: 5vh;
        margin-right: 0;
    }
    @media screen and (max-width: 1050px) {
        display: none;
    }
`;

export const Review4 = styled.div`
    width: 46.3vh;
    height: 23.3vh;
    background-color: white;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    z-index: 2;
    margin-bottom: 20vh;
    margin-top: -5vh;

    @media screen and (max-width: 500px) {
        width: 35vh;
        margin-left: 0vh;
        margin-top: 1vh;
    }
    @media screen and (max-width: 400px) {
        width: 48vh;
        margin-left: 1vh;
    }
`;

export const Review5 = styled.div`
  width: 39vh;
  height: 19.78vh;
  background-color: white;
  box-shadow: 0.3vh 0.3vh 3vh #868e96;
  margin-left: -10vh;
  margin-bottom: -35vh;
  z-index: 1;
  @media screen and (max-width: 1500px) {
    margin-left: 0;
    margin-top: -10vh;
  }
  @media screen and (max-width: 1050px) {
    margin-left: 12.5vh;
    margin-top: -13vh;
  }
  @media screen and (max-width: 500px) {
    width: 37vh;
    margin-left: 13vh;
    margin-top: -12vh;
  }
  @media screen and (max-width: 400px) {
    width: 42vh;
  }
`;

export const ReviewTitle = styled.div`
    color: #333333;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    padding: 2.5vh 2.5vh 0 2.5vh;
    line-height: 3.2vh;

    @media screen and (max-width: 400px) {
        font-size: 17px;
    }
`;

export const BtnWrapper = styled.div`
    width: 100%;
    color: #333333;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 2.5vh;
    padding: 2vh 0 0 2.5vh;
    .ReviewBtn2{ margin-top: 1.5vh; }
    .ReviewBtn3{ margin-top: 6.5vh; }
    .ReviewBtn4{ 
        margin-top: 3.5vh; 
        @media screen and (max-width: 500px) {
            margin-top: 1vh;
            margin-left: 15vh;
        }
    }
    .ReviewBtn5{ margin-top: 2.5vh; }

    @media screen and (max-width: 400px) {
        .ReviewBtn4 {
            margin-left: 25vh;
        }
    }
`;

export const ReviewBtn1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13vh;
    height: 3.8vh;
    text-align: center;
    color: black;
    font-weight: 600;
    background: #BAC8FF;
    border-radius: 31.5px;
    font-size: 15px;
`;

export const ReviewBtn2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13vh;
    height: 3.8vh;
    text-align: center;
    color: black;
    font-weight: 600;
    background: #FFB5B5;
    border-radius: 31.5px;
    font-size: 15px;

`;

export const ReviewBtn3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13vh;
    height: 3.8vh;
    text-align: center;
    color: black;
    font-weight: 600;
    background: #E2F6D7;
    border-radius: 31.5px;
    font-size: 15px;
    @media screen and (max-width: 1050px) {
        margin-left: 28vh;
    }

    @media screen and (max-width: 500px) {
        margin-left: 12vh;
    }


`;