import mergeTW from "utils/mergeTW";

export default ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 675 251"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={mergeTW(className, "w-full sm:w-[675px] sm:h-[251px]")}
  >
    <g filter="url(#filter0_f_3289_3080)">
      <path
        d="M440 -139.746L577.136 154L106.517 56.1495L97.9305 19.9494L440 -139.746Z"
        fill="url(#paint0_linear_3289_3080)"
        fill-opacity="0.44"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3289_3080"
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
          result="effect1_foregroundBlur_3289_3080"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3289_3080"
        x1="456.728"
        y1="10.8629"
        x2="105.938"
        y2="169.162"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0EA5E9" />
        <stop offset="0.253305" stop-color="#9333EA" stop-opacity="0.5" />
        <stop offset="0.470899" />
        <stop offset="0.704177" stop-color="#064967" stop-opacity="0.559106" />
        <stop offset="1" stop-color="#0EA5E9" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
