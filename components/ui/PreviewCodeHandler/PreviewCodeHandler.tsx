import ButtonHandler from "./ButtonHandler";

type PreviewCode = {
  isPreview: boolean;
  setPreview: (bool: boolean) => void;
};

export default ({ isPreview, setPreview }: PreviewCode) =>
  isPreview ? (
    <ButtonHandler onClick={() => setPreview(false)}>
      <svg width='20' height='20' fill='none' className='text-blue-600'>
        <path
          d='M13.75 6.75l3.5 3.25-3.5 3.25M6.25 13.25L2.75 10l3.5-3.25'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'></path>
      </svg>
      Code
    </ButtonHandler>
  ) : (
    <ButtonHandler onClick={() => setPreview(true)}>
      <svg width='20' height='20' fill='none' className='text-blue-600'>
        <path
          d='M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'></path>
        <circle
          cx='10'
          cy='10'
          r='2.25'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'></circle>
      </svg>
      Preview
    </ButtonHandler>
  );
