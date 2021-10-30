import * as React from "react";

function S3Icon2(props) {
  return (
      <svg width="100" height="100" viewBox="0 0 131 130" fill="none" {...props}>
        <g filter="url(#prefix__filter1_d)">
          <rect x={15} y={11} width={100.374} height={100} rx={18} fill="#fff" />
          <path
              clipRule="evenodd"
              d="M45.844 62.667c0 14.452 4.837 19.271 19.343 19.271S84.53 77.12 84.53 62.668c0-14.453-4.837-19.271-19.343-19.271s-19.343 4.818-19.343 19.27z"
              stroke="#FFCBB5"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          <path
              d="M72.276 66.871l-7.09-4.214v-9.085"
              stroke="#FFCBB5"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
              id="prefix__filter1_d"
              x={0}
              y={0}
              width={130.374}
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

const MemoS3Icon2 = React.memo(S3Icon2);
export default MemoS3Icon2;