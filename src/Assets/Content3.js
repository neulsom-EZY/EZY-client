import * as React from "react";

function Content3(props) {
  return (
    <svg width={147} height={162} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <rect x={20} y={16} width={107} height={130} rx={20} fill="#fff" />
      </g>
      <path
        d="M44.736 113.82h-7.104v3.816h7.104v-3.816zm-2.904 7.824v-1.968h4.188v-.996h-9.66v.996h4.248v1.968h1.224zm3.06 1.992v-.972h-6.048v-2.052h-1.236v3.024h7.284zm-1.392-6.984h-4.632v-1.848H43.5v1.848zm9.41 0c0-1.5-1.211-2.556-2.795-2.556-1.548 0-2.736 1.08-2.736 2.556 0 1.452 1.176 2.436 2.736 2.436 1.572 0 2.796-.96 2.796-2.436zm-1.235-.012c0 .852-.72 1.404-1.56 1.404-.816 0-1.536-.552-1.536-1.404 0-.888.708-1.488 1.536-1.488.864 0 1.56.564 1.56 1.488zm4.008-3.384h-1.224v10.692h1.224v-10.692zm-1.824 6.972c-.924.096-2.124.18-3.648.24a51.188 51.188 0 01-3.552.06l.192 1.056c2.508-.012 4.812-.12 7.104-.372l-.096-.984zm8.859-.684c0-1.308-1.02-2.28-2.544-2.28-1.536 0-2.568 1.008-2.568 2.28 0 1.32 1.032 2.28 2.568 2.28 1.524 0 2.544-.996 2.544-2.28zm-1.212 0c0 .744-.504 1.272-1.332 1.272-.78 0-1.332-.528-1.332-1.272 0-.756.552-1.272 1.332-1.272.768 0 1.332.516 1.332 1.272zm1.752-2.796v-.996h-6.216v.996h6.216zm-4.704-1.86h3.24v-1.008h-3.24v1.008zm6.876-1.632h-1.236v10.692h1.236v-5.268h1.656v-1.032H65.43v-4.392zm10.886 10.692v-10.692h-1.224v10.692h1.224zm-3.276-9.564h-4.956v1.008h3.636c-.204 2.244-1.8 4.488-4.26 5.616l.768.936c3.084-1.692 4.74-4.248 4.812-7.56z"
        fill="#6B40FF"
      />
      <circle cx={101.5} cy={41.5} r={17.5} fill="#6B40FF" />
      <path
        clipRule="evenodd"
        d="M101.5 47.125c-4.059 0-5.652-.288-5.91-1.748s1.394-4.204 1.903-5.11c1.702-3.027 2.859-4.392 4.007-4.392 1.148 0 2.305 1.365 4.007 4.393.509.905 2.162 3.65 1.903 5.11-.257 1.459-1.851 1.747-5.91 1.747z"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M101.5 39.313v2.434M101.497 43.935h.006"
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

const MemoContent3 = React.memo(Content3);
export default MemoContent3;
