import * as React from "react";

function S3Icon4(props) {
  return (
    <svg width="100" height="100" viewBox="0 0 126 130" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <rect x={15} y={11} width={95.594} height={100} rx={18} fill="#fff" />
        <path
          clipRule="evenodd"
          d="M44.375 62.615c0-14.491 4.618-19.32 18.47-19.32 13.852 0 18.47 4.829 18.47 19.32 0 14.492-4.618 19.321-18.47 19.321-13.852 0-18.47-4.829-18.47-19.32z"
          stroke="#FFB5B5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44.923 55.424h35.864M71.616 63.627h.018M62.855 63.627h.018M54.077 63.627h.018M71.616 71.652h.018M62.855 71.652h.018M54.077 71.652h.018M70.829 40.27v6.796M54.88 40.27v6.796"
          stroke="#FFB5B5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={125.594}
          height={130}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

const MemoS3Icon4 = React.memo(S3Icon4);
export default MemoS3Icon4;
