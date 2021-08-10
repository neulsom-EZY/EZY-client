import * as React from "react";

function Content2(props) {
  return (
    <svg width={147} height={162} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <rect x={20} y={16} width={107} height={130} rx={20} fill="#fff" />
      </g>
      <path
        d="M43.932 113.256v5.988h1.236v-5.988h-1.236zm1.248 10.56v-3.972h-7.008v3.972h7.008zm-1.236-.984H39.42v-2.028h4.524v2.028zm-1.116-4.896c-1.236-.408-2.556-1.656-2.556-3.324v-.9h-1.26v.948c0 1.656-1.092 2.94-2.628 3.54l.756.972c1.116-.468 2.196-1.452 2.52-2.556.456 1.008 1.56 1.908 2.448 2.28l.72-.96zm12.375.156v-4.452h-1.224v1.308h-4.824v-1.284h-1.212v4.428h7.26zm-3.036 5.868v-3.6h4.236v-.996h-9.66v.996h4.2v3.6h1.224zm1.812-6.864h-4.824v-1.176h4.824v1.176zm12.807 2.676v-.996h-9.66v.996h9.66zm-1.044-1.704v-.936h-6.108v-.852h5.868v-2.652h-7.116v.936h5.88v.816h-5.868v2.688h7.344zm-.192 5.748v-3.288h-7.188v3.288h7.188zm-1.224-.948h-4.74v-1.392h4.74v1.392z"
        fill="#6B40FF"
      />
      <circle cx={101.5} cy={41.5} r={17.5} fill="#6B40FF" />
      <path
        d="M100.757 44.792v-1.643M106.462 41.643l-.018.013c-1.514.932-3.513 1.495-5.69 1.495-2.178 0-4.17-.563-5.684-1.495l-.019-.013"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M95 42.812c0-3.845 1.44-5.127 5.757-5.127 4.318 0 5.757 1.282 5.757 5.127 0 3.845-1.439 5.127-5.757 5.127S95 46.657 95 42.812z"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M102.796 37.824v-.393c0-.79-.577-1.431-1.288-1.431h-1.503c-.71 0-1.287.64-1.287 1.43v.394"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={147}
          height={170}
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
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

const MemoContent2 = React.memo(Content2);
export default MemoContent2;
