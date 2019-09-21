import React from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

const ControlBarView = ({ playTime, isVisible, playClick, backClick }) => {
  const visibleOpacity = useSpring({
    opacity: isVisible ? 1 : 0,
    config: config.slow
  });
  const visibleShift = useSpring({
    transform: isVisible ? "translateY(0px)" : "translateY(10px)"
  });
  return (
    <Container style={visibleOpacity}>
      <NamePlate>
        <p style={{ fontWeight: 500 }}>Memory #42</p>
        <p>:</p>
        <p style={{ fontWeight: 300 }}>Morning </p>
      </NamePlate>
      <Slider playTime={playTime} />
      <ControlContainer style={visibleShift}>
        <ShareButton />
        <PrevButton onClick={backClick} />
        <PlayButton onClick={playClick} />
        <NextButton />
        <NeuronButton />
      </ControlContainer>
    </Container>
  );
};

const PlayButton = ({ onClick }) => (
  <div onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 25 25"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
        fill="#FFFFFF"
      />
    </svg>
  </div>
);

const NextButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 25 25"
    style={{marginRight: '25px'}}
  >
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="#FFFFFF" />
  </svg>
);

const PrevButton = ({ onClick }) => (
  <div onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 25 25"
      style={{marginLeft: '25px'}}
    >
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" fill="#FFFFFF" />
    </svg>
  </div>
);

const NeuronButton = () => (
  <svg
    width="26"
    height="20"
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.8586 5.05387C25.5955 4.64925 25.0525 4.534 24.6484 4.79831L21.9954 6.52476L18.028 4.23514C17.7573 4.07886 17.4244 4.07886 17.1537 4.23514L13.159 6.54073L9.60159 4.48741V0.983665C9.60159 0.500885 9.21046 0.109375 8.72725 0.109375C8.24383 0.109375 7.85275 0.500938 7.85275 0.983665V4.48735L4.33808 6.51585L1.37246 4.46167C0.976176 4.18722 0.430567 4.28629 0.155481 4.68284C-0.119393 5.07998 -0.0203219 5.62431 0.376653 5.89982L3.42102 8.0085V12.668C3.42102 12.9804 3.58743 13.2691 3.85816 13.4254L7.85269 15.7314V19.0165C7.85269 19.4992 8.24383 19.8908 8.7272 19.8908C9.21035 19.8908 9.60154 19.4992 9.60154 19.0165V15.7314L13.1589 13.6777L16.7165 15.7314V19.0165C16.7165 19.4992 17.1075 19.8908 17.5909 19.8908C18.0742 19.8908 18.4654 19.4992 18.4654 19.0165V15.7314L22.4599 13.4254C22.7306 13.2691 22.8971 12.9804 22.8971 12.668V8.02426L25.6023 6.26358C26.0072 6.00011 26.1217 5.4587 25.8586 5.05387ZM5.16991 8.05557L8.7273 6.00224L12.2847 8.05557V12.1629L8.7273 14.2166L5.16991 12.1629V8.05557ZM21.1483 12.1629L17.5909 14.2166L14.0335 12.1629V8.05557L17.5909 6.00224L21.1483 8.05557V12.1629Z"
      fill="white"
    />
  </svg>
);

const ShareButton = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08Z"
      fill="white"
    />
  </svg>
);

const Slider = ({ playTime }) => {
  const minutes = Math.floor(playTime / 60);
  const seconds = playTime - minutes * 60;
  const timeSpring = useSpring({
    time: [minutes, seconds],
    config: config.slow
  });
  const barSpring = useSpring({
    progress: (playTime / 250) * 320 + 10,
    config: config.slow
  });
  return (
    <SliderContainer>
      <svg
        width="340"
        height="15"
        viewBox="0 0 340 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{marginRight: '-5px'}}
      >
        <rect y="6" x="1" width="320" height="4" rx="2.5" fill="#9D9D9D" />
        <animated.rect
          y="6"
          x="1"
          width={barSpring.progress}
          height="4"
          rx="2.5"
          fill="#FFFFFF"
        />
        <animated.circle cx={barSpring.progress} cy="8" r="6" fill="white" />
      </svg>
      <TimeContainer>
        <animated.div>
          {timeSpring.time.interpolate(
            (minutes, seconds) =>
              `${Math.floor(minutes)}:${("0" + Math.floor(seconds)).slice(-2)}`
          )}
        </animated.div>
        <div>4:01</div>
      </TimeContainer>
    </SliderContainer>
  );
};
const TimeContainer = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  width: 100%;
`;

const SliderContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
`;
const Container = styled(animated.div)`
  position: absolute;
  bottom: 5%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 25vh;
`;
const ControlContainer = styled(animated.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding-left: 5%;
  padding-right: 5%;
  height: 10vh;
  padding-top: 8px;
  padding-bottom: 6px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
const NamePlate = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 260px;
  height: 50px;
  left: 39px;
  top: 0;
  margin-bottom: -15px;
  font-family: Rubik;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;
`;

export default ControlBarView;
