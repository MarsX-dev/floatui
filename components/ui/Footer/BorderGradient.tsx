import mergeTW from "utils/mergeTW";

export default ({ className = "" }: { className: string }) => (
  <svg
    width="755"
    height="3"
    viewBox="0 0 755 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={mergeTW(className)}
  >
    <rect width="755" height="3" fill="url(#paint0_radial_3324_13394)" />
    <defs>
      <radialGradient
        id="paint0_radial_3324_13394"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(377.5 1.5) rotate(90) scale(1.5 377.5)"
      >
        <stop stop-color="#3F3F46" />
        <stop offset="1" stop-color="#3F3F46" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
);
