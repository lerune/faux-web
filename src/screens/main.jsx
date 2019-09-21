import React, { useState, useEffect } from "react";
import { StageProvider } from "../context/stage-context";
import ContentDisplay from "../components/content-display/content-display";
import LogoDisplay from "../components/logo-display/logo-display";
import LoadingBar from "../components/loading-bar/loading-bar";
import ControlBar from "../components/control-bar/control-bar";
const Main = () => {
  const [stage, setStage] = useState(0);


  useEffect(() => {
    if (stage === 0) {
      setTimeout(() => {
        setStage(1);
      }, 2000);
      setTimeout(() => {
        setStage(3);
      }, 8000);
    }
  });

  return (
    <StageProvider value={{ stage: stage, setStage: stage => setStage(stage) }}>
      <ContentDisplay />
      <LogoDisplay />
      <LoadingBar />
      <ControlBar />
    </StageProvider>
  );
};

export default Main;
