import * as React from "react";

function Eye2(props) {
  return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100H100V-7.15256e-07H0V100Z" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          </pattern>
          <image id="image0_6908:3938" width="64" height="64"></image>
        </defs>
      </svg>
  );
}

const MemoEye2 = React.memo(Eye2);
export default MemoEye2;