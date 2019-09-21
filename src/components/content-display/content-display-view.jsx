import React from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";
import Image from "../../assets/img/portrait.png";

const ContentDisplayView = ({ isGradient, isBlur }) => {
  const Container = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100vw;
    height: 100vh;
  `
  const DisplayImage = styled(animated.img)`
    position: absolute;
    width: 100%;
    height: auto;
    top: 0px;
    left: 0px;
  `;
  const GradientOverlay = styled(animated.div)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: linear-gradient(
      180deg,
      rgba(120, 120, 120, 0) 0%,
      #2B66FE 100%
    );
    mix-blend-mode: screen;
  `;


  
  const gradientFade = useSpring({
    opacity: isGradient ? 1 : 0,
    config: config.slow
  });
  const blurFade = useSpring({
    filter: isBlur ? "blur(5px)" : "blur(0px)",
    config: config.slow
  });

  return (
    <Container>
      <DisplayImage src={Image} style={blurFade} />
      <GradientOverlay style={gradientFade} />
    </Container>
  );
};

export default ContentDisplayView;
