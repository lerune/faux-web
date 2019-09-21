import React, { useState, useEffect, useContext } from "react";
import LoadingBarView from "./loading-bar-view";
import StageContext from "../../context/stage-context";

const LoadingBar = () => {
  const { stage, setStage } = useContext(StageContext);
  const [completed, setCompleted] = useState(0);
  const isVisible = stage === 1 || stage === 4 ? true : false;

  useEffect(() => {
    if(completed === 100 && (stage === 1 || stage===4)) { setTimeout(() => setStage(stage === 1 ? 2 : 5), 500)}
    if(!isVisible){ setCompleted(0)}
    if (isVisible && completed === 0) {
      setTimeout(() => {
        setCompleted(10);
      }, stage === 4 ? 1000 : 500 );
      setTimeout(() => {
        setCompleted(30);
      }, stage === 4 ? 3000 : 1000 );
      setTimeout(() => {
        setCompleted(60);
      }, stage === 4 ? 4500 : 1500 );
      setTimeout(() => {
        setCompleted(100);
      }, stage === 4 ? 5000 : 2000 );
    }
  });

  return <LoadingBarView stage={stage} isVisible={isVisible} completed={completed} />;
};

export default LoadingBar;
