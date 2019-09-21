import React, { useContext, useState, useEffect } from "react";
import ControlBarView from "./control-bar-view";
import StageContext from "../../context/stage-context";

const ControlBar = () => {
  const { stage, setStage } = useContext(StageContext);
  const isVisible = stage === 3;
  const [playTime, setPlayTime] = useState(241);
  
  useEffect(() => {
    if (stage === 5) { setPlayTime(241) }
  })

  return (
    <ControlBarView
      isVisible={isVisible}
      backClick={() => setPlayTime(0)}
      playClick={() => {setStage(4);}}
      playTime={playTime}
    />
  );
};

export default ControlBar;
