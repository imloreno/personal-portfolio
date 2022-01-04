import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ClockSvg = ({ isActive }) => {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTimeout(() => {
          const DATE = new Date();
          setTime({
            hour: DATE.getHours(),
            minutes: DATE.getMinutes(),
            seconds: DATE.getSeconds(),
          });
        }, 200);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.15 443.15">
      <g id="Layer_2" data-name="Layer 2">
        <g id="clock">
          <path id="line6" className="clock__numbers" d="M221.57,437V6.17" />
          <path id="line5" className="clock__numbers" d="M6.17,221.57H437" />
          <path
            id="line4"
            className="clock__numbers"
            d="M329.27,408.11,113.87,35"
          />
          <path
            id="line1"
            className="clock__numbers"
            d="M113.87,408.11,329.27,35"
          />
          <path
            id="line3"
            className="clock__numbers"
            d="M408.11,329.27,35,113.87"
          />
          <path
            id="line2"
            className="clock__numbers"
            d="M35,329.27l373.08-215.4"
          />
          <path
            id="bg"
            className="bg"
            d="M404.4,221.57C404.4,318.45,322.55,397,221.57,397S38.74,318.45,38.74,221.57,120.6,46.16,221.57,46.16,404.4,124.69,404.4,221.57Z"
          />
          <line
            id="second"
            className="cls-4"
            x1="221.57"
            y1="66.39"
            x2="221.57"
            y2="274.11"
            style={{ transform: `rotate(${6 * time.seconds}deg)` }}
          />
          <line
            id="minute"
            className="cls-5"
            x1="221.57"
            y1="266.89"
            x2="221.57"
            y2="83.47"
            style={{ transform: `rotate(${6 * time.minutes}deg)` }}
          />
          <line
            id="hour"
            className="cls-6"
            x1="221.57"
            y1="256.11"
            x2="221.57"
            y2="111.54"
            style={{
              transform: `rotate(${
                30 * time.hour + ((100 / 60) * time.minutes * 30) / 100
              }deg)`,
            }}
            //360 / 100 * minutes * { 30 }
          />
          <path
            id="center"
            style={{ fillRule: "evenodd" }}
            d="M236.19,221.57A14.62,14.62,0,1,1,221.57,207,14.61,14.61,0,0,1,236.19,221.57Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ClockSvg;
