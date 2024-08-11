import React, { FC, useEffect, useState } from "react";

export const NowView = ({ interval }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, interval);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return (
    <div style={{color: "white", margin: "auto", fontSize: "72px"}}>
    	{time}
    </div>
  );
};