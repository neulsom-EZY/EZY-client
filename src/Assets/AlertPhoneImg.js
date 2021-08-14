import * as React from "react";
function AlertPhoneImg(props) {
  return (
    <svg width={230} height={457} fill="none" {...props}>
      <path fill="url(#prefix__pattern0)" d="M0 0h230v456.152H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0" transform="scale(.00056 .00028)" />
        </pattern>
        <image
          id="prefix__image0"
          width={1793}
          height={3556}
        />
      </defs>
    </svg>
  );
}
const MemoAlertPhoneImg = React.memo(AlertPhoneImg);
export default MemoAlertPhoneImg;