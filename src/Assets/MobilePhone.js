import * as React from "react";
function MobilePhone(props) {
  return (
    <svg width={100} height={400} fill="none" {...props}>
      <path fill="url(#prefix__pattern0)" d="M0 0h800v821H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0"
            transform="matrix(.00043 0 0 .00043 0 0)"
          />
        </pattern>
        <image
          id="prefix__image0"
          width={1000}
          height={1150}
        />
      </defs>
    </svg>
  );
}
const MemoMobilePhone = React.memo(MobilePhone);
export default MemoMobilePhone;