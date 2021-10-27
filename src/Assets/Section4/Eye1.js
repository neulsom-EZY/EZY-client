import * as React from "react";

function Eye1(props) {
  return (
      <svg width="120" height="121" viewBox="0 0 120 121" fill="none">
        <path d="M0 120.4H120V0.399999H0V120.4Z" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use transform="scale(0.015625)"/>
          </pattern>
          <image id="image0_6908:3942" width="64" height="64"></image>
        </defs>
      </svg>
  );
}

const MemoEye1 = React.memo(Eye1);
export default MemoEye1;