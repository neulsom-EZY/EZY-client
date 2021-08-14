import * as React from "react";
function WebSomeDay(props) {
  return (
    <svg width={379} height={729} fill="none" {...props}>
      <g clipPath="url(#prefix__clip1)">
        <path fill="url(#prefix__pattern5)" d="M1 1h357.995v710H1z" />
      </g>
      <defs>
        <clipPath id="prefix__clip1">
          <path fill="#fff" d="M0 0h379v729H0z" />
        </clipPath>
        <pattern
          id="prefix__pattern5"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image5" transform="scale(.00056 .00028)" />
        </pattern>
        <image
          id="prefix__image5"
          width={1793}
          height={3556}
        />
      </defs>
    </svg>
  );
}
const MemoWebSomeDay = React.memo(WebSomeDay);
export default MemoWebSomeDay;