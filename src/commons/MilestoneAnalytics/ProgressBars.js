import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgress";

const ProgressBar = ({
  valueEnd = 0,
  children,
  pathStroke = 'rgba(47,128,237,1)',
  className,
  showValue = true,
  strokeWidth = 4,
}) => {
  return (
    <div className={className}>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={valueEnd}
        duration={1}
        easingFunction={easeQuadInOut}
      >
        {(value) => (
          <CircularProgressbarWithChildren
            strokeWidth={strokeWidth}
            styles={buildStyles({
              root: {},
              pathColor: pathStroke,

              path: {
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#ECE9E9",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              background: {
                fill: "#fff",
              },
            })}
            value={value}
          >
            <div className="flex items-center flex-col justify-center">
              {showValue && (
                <h6 className="mb-2 font-sans text-4xl font-medium text-text-dark">
                  {`${Math.round(value)}%`}
                </h6>
              )}
              {children}
            </div>
          </CircularProgressbarWithChildren>
        )}
      </AnimatedProgressProvider>
    </div>
  );
};

export default ProgressBar;
