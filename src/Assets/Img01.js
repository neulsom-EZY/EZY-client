import * as React from "react";
function Img01(props) {
  return (
    <svg width={750} height={636} fill="none" {...props}>
      <path fill="url(#prefix__pattern0)" d="M0 0h535v636H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0" transform="scale(.00053)" />
        </pattern>
        <image
          id="prefix__image0"
          width={1893}
          height={2250}
        />
      </defs>
    </svg>
  );
}
const MemoImg01 = React.memo(Img01);
export default MemoImg01;