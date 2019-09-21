import React, { useContext } from "react";
import LogoDisplayView from "./logo-display-view";
import StageContext from "../../context/stage-context";


const LogoDisplay = () => {
  const { stage, setStage } = useContext(StageContext);

  const handleReset = () => {
    setStage(0);
    
  };

  const isVisible =
    (stage >= 1 && stage <= 2) || (stage >= 4 && stage <= 5) ? true : false;
  const enabled = stage === 2 || stage === 5 ? true : false;
  const flashing = stage >= 4 ? true : false;

  return (
    <LogoDisplayView
      isVisible={isVisible}
      enabled={enabled}
      onClick={handleReset}
      flashing={flashing}
    />
  );
};

export default LogoDisplay;
