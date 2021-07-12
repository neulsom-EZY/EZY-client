import * as React from "react";
function Img05(props) {
  return (
    <svg width={796} height={1420} fill="none" {...props}>
      <path fill="url(#prefix__pattern3)" d="M0 0h796v1420H0z" />
      <defs>
        <pattern
          id="prefix__pattern3"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image3"
            transform="matrix(.00093 0 0 .00052 -.067 0)"
          />
        </pattern>
        <image
          id="prefix__image3"
          width={1220}
          height={1920}
        />
      </defs>
    </svg>
  );
}
const MemoImg05 = React.memo(Img05);
export default MemoImg05;