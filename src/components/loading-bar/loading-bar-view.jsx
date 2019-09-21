import React from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";

const LoadingBarView = ({ stage, completed, isVisible }) => {
  const Title = styled(animated.p)`
    position: absolute;
    width: 256px;
    height: 143px;
    top: 60vh;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 6.5vh;
    /* or 109% */

    text-align: center;

    color: #ffffff;

    mix-blend-mode: screen;
  `;
  const Subtitle = styled(animated.p)`
    position: absolute;
    width: 50vw;
    top: 40vh;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 5vh;
    line-height: 55px;
    /* or 115% */

    text-align: center;

    color: #ffffff;

    mix-blend-mode: screen;
  `;

  const LoadingText = styled(animated.span)`
    position: absolute;
    bottom: 20vh;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 55px;
    /* or 306% */

    text-align: center;
  `;

  const MemoryName = styled(animated.span)`
    position: absolute;
    bottom: 25vh;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 55px;
    /* identical to box height, or 153% */

    text-align: center;

    color: #ffffff;
  `;
  const TopBar = styled(animated.div)`
    position: absolute;
    width: 300px;
    height: 4px;
    bottom: 15vh;
    background: #9d9d9d;
    border-radius: 100px;
  `;
  const BottomBar = styled(animated.div)`
    position: absolute;
    height: 4px;
    bottom: 15vh;
    background: white;
    border-radius: 100px;
  `;

  const widthSpring = useSpring({
    width: `${(300 / 100) * completed}px`,
    config: config.slow
  });
  const fadeSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    config: config.slow
  });
  console.log(stage);
  return (
    <>
      {stage <= 2 && (
        <>
          <Subtitle style={fadeSpring}>In Loving Memory</Subtitle>
          <Title style={fadeSpring}>Tim Bennet</Title>
        </>
      )}
      {stage >= 3 && (
        <>
          <MemoryName style={fadeSpring}>Morning (2042)</MemoryName>
          <LoadingText style={fadeSpring}>Retreiving Memory...</LoadingText>
        </>
      )}
      <TopBar style={fadeSpring} />
      <BottomBar style={{ ...fadeSpring, ...widthSpring }} />
    </>
  );
};

export default LoadingBarView;
