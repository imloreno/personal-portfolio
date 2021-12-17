import { useEffect, useState } from "react";

const GitHubLogo = ({ className, isHover }) => {
  const [eyeRight, setEyeRight] = useState({
    cx: 33.31,
    ry: 6.07,
  });
  const [eyeLeft, setEyeLeft] = useState({
    cx: 53.47,
    ry: 6.07,
  });

  useEffect(() => {
    if (isHover) {
      setTimeout(() => {
        setEyeLeft({
          cx: 53.35,
          ry: 1.2,
        });
        setEyeRight({
          cx: 33.19,
          ry: 1.2,
        });
      }, 100);

      setTimeout(() => {
        setEyeLeft({
          cx: 53.47,
          ry: 6.07,
        });
        setEyeRight({
          cx: 33.31,
          ry: 6.07,
        });
      }, 300);

      setTimeout(() => {
        setEyeLeft({
          cx: 53.35,
          ry: 1.2,
        });
        setEyeRight({
          cx: 33.19,
          ry: 1.2,
        });
      }, 400);

      setTimeout(() => {
        setEyeLeft({
          cx: 53.47,
          ry: 6.07,
        });
        setEyeRight({
          cx: 33.31,
          ry: 6.07,
        });
      }, 600);
      var interval = setInterval(() => {
        setTimeout(() => {
          setEyeLeft({
            cx: 53.35,
            ry: 1.2,
          });
          setEyeRight({
            cx: 33.19,
            ry: 1.2,
          });
        }, 100);

        setTimeout(() => {
          setEyeLeft({
            cx: 53.47,
            ry: 6.07,
          });
          setEyeRight({
            cx: 33.31,
            ry: 6.07,
          });
        }, 300);

        setTimeout(() => {
          setEyeLeft({
            cx: 53.35,
            ry: 1.2,
          });
          setEyeRight({
            cx: 33.19,
            ry: 1.2,
          });
        }, 400);

        setTimeout(() => {
          setEyeLeft({
            cx: 53.47,
            ry: 6.07,
          });
          setEyeRight({
            cx: 33.31,
            ry: 6.07,
          });
        }, 600);
      }, 1700);
    }
    return () => clearInterval(interval);
  }, [isHover]);

  return (
    <svg
      id="github"
      className={"default-logo " + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82.25 85.12"
    >
      <path
        id="body"
        d="M81.43,125.52c2.94,1.07,5.06.53,5.06-2.49s-.11-9.81-.11-9.81a47.52,47.52,0,0,1,.3-7.58,12.28,12.28,0,0,1,3.39-7.28C86,98,73.07,96.54,67.82,85.18S66.11,60,70.93,56.68c-1.29-2.57-2.07-9.68.43-14.54,5.85-.64,15,5.65,15,5.65a53,53,0,0,1,27.35,0s8.79-6.53,15-5.69c2.93,4.54,1.93,12.26.72,14.69a21.34,21.34,0,0,1,5.43,11.57c1.07,7.28-.61,13.82-4.57,20.35s-13.72,8.84-20.2,9.7c2.09,1.29,3.16,4.23,3.48,7.07s0,16.07.06,18,1.73,3.52,4.66,2.28"
        transform="translate(-56.61 -41.52)"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <g id="eyes">
        <ellipse
          id="eyeRight"
          cx={eyeRight.cx}
          cy="38.27"
          rx="4.63"
          ry={eyeRight.ry}
          style={{ transition: "0.1s" }}
        />
        <ellipse
          id="eyeLeft"
          cx={eyeLeft.cx}
          cy="38.27"
          rx="4.63"
          ry={eyeLeft.ry}
          style={{ transition: "0.1s" }}
        />
      </g>
      <path
        id="face"
        d="M124.61,81.75c0,8-9.25,11.79-24.22,11.79s-25-4.77-25-12.75c0-3.62-1.75-16.3,2.36-17.9,5-1.93,14,1.93,22.21,1.93,9.34,0,17.8-4.33,22.68-1.71C125.61,64.68,124.61,78.75,124.61,81.75Z"
        transform="translate(-56.61 -41.52)"
        fill="none"
        strokeMiterlimit="10"
      />
      <g id="moustache">
        <line
          x1="25.11"
          y1="41.08"
          x2="2.62"
          y2="36.88"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <line
          x1="24.29"
          y1="43.17"
          x2="2.85"
          y2="46.52"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <line
          x1="24.27"
          y1="38.98"
          x2="3.04"
          y2="27.63"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <line
          x1="62.83"
          y1="38.63"
          x2="81.75"
          y2="31.66"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <line
          x1="62.2"
          y1="41.12"
          x2="80.7"
          y2="39.65"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <line
          x1="62.91"
          y1="43.04"
          x2="81.62"
          y2="46.81"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
      </g>
      <path
        id="tail"
        className="cls-2"
        d="M86.44,108.91c-10.65.38-10,5.84-18.53,6.94-7.75,1-9.31-6.46-10.18-6.26s1,10.44,10.13,9.57,8.94-3.45,18.58-3.55"
        transform="translate(-57.03 -41.52)"
        fill="none"
      />

      <path
        d="M94.37,107.13c-1.71,5.94-1.16,13.81-1.16,13.81"
        transform="translate(-56.61 -41.52)"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M106.55,107.25c1.15,3.71,1,11.86.86,13.57"
        transform="translate(-56.61 -41.52)"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />

      {className === "animated" && (
        <animate
          xlinkHref="#tail"
          attributeType="XML"
          attributeName="d"
          from="M86.44,108.91c-10.65.38-10,5.84-18.53,6.94-7.75,1-9.31-6.46-10.18-6.26s1,10.44,10.13,9.57,8.94-3.45,18.58-3.55"
          to="M86.44,108.91c-7.3-1-3.8-3.55-11.73-6.62-7.28-2.83-15.61,1.71-15.14,2.46.93,1.46,7.56-2.59,13.42.11,8.08,3.72,4.37,7.93,13.45,10.75"
          dur="1s"
          repeatCount="indefinite"
        />
      )}
    </svg>
  );
};

export default GitHubLogo;
