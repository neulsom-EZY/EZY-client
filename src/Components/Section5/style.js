import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    height: 120vh;
    z-index: -100;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    background-position: center;
    background-size: cover;
`;

export const TitleSection = styled.div`
    width: 100%;
    word-break: keep-all;
`;

export const MainTitle = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 55px;
    line-height: 8vh;
    color: black;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ReviewSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-left: -10vh;
    margin-bottom: 8vh;
`;

export const RightSection = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
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
    background: linear-gradient(180deg, rgba(107, 64, 255, 0.5) 0%, rgba(34, 30, 255, 0.289062) 51.04%, rgba(128, 153, 255, 0) 100%);
    z-index: -1;
`;

export const Review1 = styled.div`
    width: 39.3vh;
    height: 19.78vh;
    margin-left: 15vh;
    background-color: white;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    z-index: 2;
`;

export const Review2 = styled.div`
    width: 48vh;
    height: 24vh;
    margin-top: -2.5vh;
    margin-right: 28vh;
    background-color: white;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    z-index: 1;
`;

export const Review3 = styled.div`
    width: 50vh;
    height: 26.3vh;
    margin-top: -1vh;
    margin-left: 15vh;
    margin-right: -10vh;
    background-color: white;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    z-index: 1;
`;

export const Review4 = styled.div`
    width: 46.3vh;
    height: 23.3vh;
    background-color: white;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    z-index: 1;
`;

export const Review5 = styled.div`
    width: 39vh;
    height: 19.78vh;
    background-color: white;
    box-shadow: 0.3vh 0.3vh 3vh #868e96;
    margin-left: -10vh;
    margin-bottom: -60vh;
    z-index: 1;
`;

export const ReviewTitle = styled.div`
    width: 100%;
    color: #333333;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 2.5vh;
    padding: 2.5vh;
`;

export const BtnWrapper = styled.div`
    width: 100%;
    color: #333333;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 2.5vh;
    padding: 4vh 0 0 2.5vh;
    .ReviewBtn2{ margin-top: 1.5vh; }
    .ReviewBtn3{ margin-top: 6.5vh; }
    .ReviewBtn4{ margin-top: 3.5vh; }
    .ReviewBtn5{ margin-top: 2.5vh; }
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
`;