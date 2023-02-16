export const IconLayout = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={`${className}`}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <g clip-path='url(#clip0_2_36818)'>
      <path
        d='M15 10V21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V10H15ZM22 10V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H17V10H22ZM21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V8H2V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_2_36818'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
