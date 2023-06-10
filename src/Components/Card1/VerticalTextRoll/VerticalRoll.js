import React from "react";
import "./CurrentCounterFrame.css";
import { VerticalElement } from "./VerticalElement";
export function CurrentCounterFrame (props) {
  
  const percent = 100/props.divs.length

  {props.divs.map((div,index) => (
    variants[index] = {top: percent*index + "%", bottom : (100-percent*(index+1))+"%"}
   ))}

  return (
      <div className="currentcounterframe">

        {props.divs.map((div,index) => (
          <VerticalElement children = {div} ></VerticalElement>
         ))}
      </div>

  );
};

<svg width="200" height="200">
      <defs>
        <mask id="myMask">
          <rect x="0" y="0" width="200" height="200" fill="white" />
          <circle cx="100" cy="100" r="50" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="200" height="200" mask="url(#myMask)" />
    </svg>


