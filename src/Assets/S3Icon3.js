import * as React from "react";

function S3Icon3(props) {
  return (
    <svg width="100" height="100" viewBox="0 0 130 130" fill="none" {...props}>
      <g filter="url(#prefix__filter2_d)">
        <rect x={15} y={11} width={100} height={100} rx={21} fill="#fff" />
      </g>
      <path
        clipRule="evenodd"
        d="M70.23 59.98a5.209 5.209 0 10-10.418-.001 5.209 5.209 0 0010.418.001z"
        stroke="#C7E0D4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M64.999 81.417c-6.038 0-15.624-10.503-15.624-21.67 0-8.742 6.994-15.83 15.624-15.83s15.626 7.088 15.626 15.83c0 11.167-9.586 21.67-15.626 21.67z"
        stroke="#C7E0D4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="prefix__filter2_d"
          x={0}
          y={0}
          width={130}
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

const MemoS3Icon3 = React.memo(S3Icon3);
export default MemoS3Icon3;
