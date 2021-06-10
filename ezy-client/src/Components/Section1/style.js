import styled from 'styled-components';

export const MainSection = styled.div `
    display: flex;
    justify-content: space-between;
    z-index: 1;
`;

export const MainBg = styled.div `
    .Bg01 {
        width: 110vh;
        height: 100vh;
    }
    .Bg02 {
        display: none;
    }
    .Bg03 {
            display: none;
    }

    @media only screen and (max-width: 1600px) {
        .Bg01 {
            display: none;
        }
        .Bg02 {
            display: block;
            width: 85vh;
            height: 100vh;
        }
    }

    @media only screen and (max-width: 1400px) {
        .Bg02 {
            width: 85vh;
            height: 100vh;
            font-size: 20px;
            font-weight: bold;
        }
    }

    @media only screen and (max-width: 1100px) {
        .Bg02 {
            display: none;
        }
        .Bg03 {
            display: block;
            width: auto;
            height: 80vh;
            margin-top: 10vh;
            margin-right: 3vh;
        }
    }
`;

export const TitleSection = styled.div `
    width: 100%;
    height: 60vh;
    color: white;
    display:flex;
`;

export const MainTitle = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 75px;
    margin-top: 40vh;
    font-weight: 500;

.text-box{
    @media only screen and (max-width: 1200px) {
        font-size: 20px;
        font-weight: bold;
    }
    width: 100%;
	display: flex;
    justify-content:center;
    align-items:center;
	position: relative;
    margin-top:10vh;
    font-size: 25px;
}

.text-box div{
	display: inline-block;
	position: absolute;
	top: -200px;
	transform: rotateX(-90deg);
	opacity: 0;
	text-shadow: 0px 5px 5px rgba(0,0,0,.25);
	animation-timing-function: ease;
}

.text-box div:nth-child(1){
	animation: rollDown 10s forwards infinite;
}

.text-box div:nth-child(2){
	animation: rollDown2 10s forwards infinite;
}

.text-box div:nth-child(3){
	animation: rollDown3 10s forwards infinite;
}

@keyframes rollDown {
	0%{
		top: -200px;
		transform: rotateX(-90deg);
	}
	11%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	22%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	33%{
		top: 50px;
		transform: rotateX(30deg);
		opacity: 0;
	}
}

@keyframes rollDown2 {
	33%{
		top: -200px;
		transform: rotateX(-90deg);
	}
	44%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	55%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	66%{
		top: 50px;
		transform: rotateX(30deg);
		opacity: 0;
	}
}

@keyframes rollDown3 {
	66%{
		top: -200px;
		transform: rotateX(-90deg);
	}
	77%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	88%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	99%{
		top: 50px;
		transform: rotateX(30deg);
		opacity: 0;
	}
}
`;

export const SubTitle = styled.div `
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    font-weight: 400;
`;