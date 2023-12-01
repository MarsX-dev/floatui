import mergeTW from "utils/mergeTW";

export default ({
  className = "",
  height = 444,
}: {
  className?: string;
  height?: number;
}) => (
  <svg
    height={height}
    viewBox="0 0 653 444"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={mergeTW(className, "w-full sm:w-[653px]")}
  >
    <g filter="url(#filter0_f_3249_6957)">
      <path
        d="M229.488 -100.921L557.588 270.669L419.698 348.86L95.3076 17.5558L229.488 -100.921Z"
        fill="url(#paint0_linear_3249_6957)"
        fill-opacity="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3249_6957"
        x="0.307617"
        y="-195.92"
        width="652.28"
        height="639.78"
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
          stdDeviation="47.5"
          result="effect1_foregroundBlur_3249_6957"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3249_6957"
        x1="390.23"
        y1="87.7945"
        x2="259.165"
        y2="203.521"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0EA5E9" />
        <stop offset="0.253305" stop-color="#9333EA" stop-opacity="0.02" />
        <stop offset="0.470899" />
        <stop offset="0.704177" stop-color="#064967" stop-opacity="0.559106" />
        <stop offset="1" stop-color="#0EA5E9" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
