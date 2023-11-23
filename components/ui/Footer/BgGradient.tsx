import mergeTW from "utils/mergeTW";

export default ({ className = "" }: { className: string }) => (
  <svg
    width="675"
    height="251"
    viewBox="0 0 675 251"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={mergeTW(className)}
  >
    <g filter="url(#filter0_f_3324_13395)">
      <path
        d="M440 -139.746L577.136 154L106.517 56.1495L97.9305 19.9494L440 -139.746Z"
        fill="url(#paint0_linear_3324_13395)"
        fill-opacity="0.15"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3324_13395"
        x="0.930542"
        y="-236.746"
        width="673.205"
        height="487.746"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="48.5"
          result="effect1_foregroundBlur_3324_13395"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3324_13395"
        x1="508.568"
        y1="7.12694"
        x2="159.672"
        y2="170.009"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F4F4F5" />
        <stop offset="1" stop-color="#F4F4F5" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
