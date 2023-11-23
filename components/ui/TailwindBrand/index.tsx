import mergeTW from "utils/mergeTW";

export default ({ className = "" }: { className?: string }) => (
  <svg
    width="85"
    height="52"
    viewBox="0 0 85 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={mergeTW(className)}
  >
    <g clip-path="url(#clip0_3249_6968)">
      <mask
        id="mask0_3249_6968"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="85"
        height="51"
      >
        <path d="M0 0H84.78V50.868H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3249_6968)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.39 0C31.086 0 24.021 5.652 21.195 16.956C25.434 11.304 30.3795 9.1845 36.0315 10.5975C39.2563 11.4029 41.561 13.7438 44.1123 16.3327C48.2681 20.5513 53.0786 25.434 63.585 25.434C74.889 25.434 81.954 19.782 84.78 8.478C80.541 14.13 75.5955 16.2495 69.9435 14.8365C66.7187 14.0311 64.414 11.6902 61.8627 9.10129C57.7069 4.8827 52.8964 0 42.39 0ZM21.195 25.434C9.891 25.434 2.826 31.086 0 42.39C4.239 36.738 9.1845 34.6185 14.8365 36.0315C18.0613 36.8385 20.366 39.1778 22.9173 41.7667C27.0731 45.9853 31.8836 50.868 42.39 50.868C53.694 50.868 60.759 45.216 63.585 33.912C59.346 39.564 54.4005 41.6835 48.7485 40.2705C45.5237 39.4651 43.219 37.1242 40.6677 34.5353C36.5119 30.3167 31.7014 25.434 21.195 25.434Z"
          fill="url(#paint0_linear_3249_6968)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_3249_6968"
        x1="20"
        y1="24"
        x2="103.5"
        y2="34"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#38BDF8" />
        <stop offset="0.253341" stop-color="white" />
        <stop offset="0.984375" stop-color="#38BDF8" />
      </linearGradient>
      <clipPath id="clip0_3249_6968">
        <rect width="84.78" height="51.81" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
