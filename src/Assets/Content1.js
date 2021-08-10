import * as React from "react";

function Content1(props) {
  return (
    <svg width={147} height={162} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <rect x={20} y={16} width={107} height={130} rx={20} fill="#fff" />
      </g>
      <path
        d="M46.308 118.404v-1.02h-1.656v-4.128h-1.224v10.692h1.224v-5.544h1.656zm-3.672 2.328l-.168-1.008c-1.212.324-3.072.456-4.464.456v-5.832h-1.212v6.876l1.104-.012c1.344-.012 3.456-.168 4.74-.48zm10.275-4.08c0-1.5-1.212-2.556-2.796-2.556-1.548 0-2.736 1.08-2.736 2.556 0 1.452 1.176 2.436 2.736 2.436 1.572 0 2.796-.96 2.796-2.436zm-1.236-.012c0 .852-.72 1.404-1.56 1.404-.816 0-1.536-.552-1.536-1.404 0-.888.708-1.488 1.536-1.488.864 0 1.56.564 1.56 1.488zm4.008-3.384h-1.224v10.692h1.224v-10.692zm-1.824 6.972c-.924.096-2.124.18-3.648.24a51.188 51.188 0 01-3.552.06l.192 1.056c2.508-.012 4.812-.12 7.104-.372l-.096-.984zm12.539-4.536v-.948h-6.204v.948h6.204zm-.588 1.98c0-.996-1.08-1.62-2.508-1.62-1.44 0-2.508.624-2.508 1.62 0 1.044 1.092 1.644 2.508 1.644 1.44 0 2.508-.6 2.508-1.644zm-1.188 0c0 .504-.624.756-1.32.756-.684 0-1.332-.252-1.332-.756 0-.456.636-.732 1.332-.732.696 0 1.32.276 1.32.732zm-2.88-3.48h3.132v-.948h-3.132v.948zm8.412 2.592v-1.032h-1.572v-2.496h-1.236v6.036h1.236v-2.508h1.572zm-1.212 7.128v-.936H62.93v-.648h5.652v-2.484h-6.924v.948h5.688v.66h-5.64v2.46h7.236zm10.62-7.824c0-1.452-1.165-2.448-2.725-2.448s-2.724 1.02-2.724 2.448c0 1.452 1.212 2.352 2.724 2.352 1.56 0 2.724-.936 2.724-2.352zm-1.213-.012c0 .732-.6 1.344-1.512 1.344-.864 0-1.512-.564-1.512-1.344 0-.792.684-1.416 1.512-1.416.936 0 1.512.612 1.512 1.416zm4.62 7.788v-.972h-6.072v-.912h5.724v-2.784h-7.008v.996h5.784v.876h-5.736v2.796h7.308zm-.36-5.22v-5.388h-1.224v5.388h1.224z"
        fill="#6B40FF"
      />
      <circle cx={101.5} cy={41.5} r={17.5} fill="#6B40FF" />
      <path
        clipRule="evenodd"
        d="M101.403 47.54c-2.308 0-4.278-.36-4.278-1.798 0-1.438 1.958-2.765 4.278-2.765 2.307 0 4.278 1.314 4.278 2.752 0 1.438-1.958 1.81-4.278 1.81zM101.398 40.983a2.741 2.741 0 10-2.742-2.741 2.732 2.732 0 002.723 2.742h.019z"
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

const MemoContent1 = React.memo(Content1);
export default MemoContent1;
