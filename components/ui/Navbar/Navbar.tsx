import { IconGithub, IconTwitter } from "@/components/icons";
import Link from "next/link";
import Brand from "../Brand";

export default () => {
  return (
    <header className='py-1'>
      <nav className='max-w-screen-2xl mx-auto px-4 flex items-center justify-between md:px-8'>
        <Link href='/'>
          <Brand />
        </Link>
        <div className='flex gap-x-6 items-center'>
          <a
            href='https://github.com/MarsX-dev/floatui'
            target='_blank'
            className='text-gray-600 hover:text-gray-800 duration-150'>
            <IconGithub />
          </a>
          <a
            href='https://twitter.com/float_ui'
            target='_blank'
            className='text-gray-600 hover:text-gray-800 duration-150'>
            <IconTwitter />
          </a>
        </div>
      </nav>
    </header>
  );
};
