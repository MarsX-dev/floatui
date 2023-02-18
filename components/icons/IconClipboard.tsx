export const IconClipboard = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`${className}`}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
    />
  </svg>
);
