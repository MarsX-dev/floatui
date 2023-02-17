import { ReactNode } from "react";
import Aside from "./ui/Aside";
import Navbar from "./ui/Navbar";

type Props = {
  children: ReactNode;
};

export default (props: Props) => {
  const { children } = props;
  return (
    <main className='relative max-w-screen-2xl mx-auto'>
      <div className='fixed top-0 right-0 w-full bg-white lg:border-b'>
        <Navbar />
      </div>
      <div className='lg:flex lg:px-8'>
        <Aside />
        <div className='flex-1 mt-48 px-4 md:px-8 lg:mt-28'>Hello</div>
      </div>
    </main>
  );
};
