import * as React from "react";
function WebPhone(props) {
  return (
    <svg width={990} height={1359} fill="none" {...props}>
      <path fill="url(#prefix__pattern1)" d="M0 0h989.5v1359H0z" />
      <defs>
        <pattern
          id="prefix__pattern1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image1" transform="scale(.0005 .00037)" />
        </pattern>
        <image
          id="prefix__image1"
          width={1979}
          height={2718}
        />
      </defs>
    </svg>
  );
}
const MemoWebPhone = React.memo(WebPhone);
export default MemoWebPhone;