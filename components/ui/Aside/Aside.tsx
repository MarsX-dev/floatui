import { IconBar, IconXMark } from "@/components/icons";
import sections from "@/json/sections.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavLink from "../NavLink";

export default () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setOpen(false));
  }, []);

  return (
    <div className='flex-none fixed z-20 top-16 w-full lg:relative lg:max-w-[16rem] lg:top-0'>
      <div className='py-4 px-4 bg-white border-y md:px-8 lg:hidden'>
        <button
          className='flex gap-x-2 items-center text-gray-800'
          onClick={() => setOpen(!isOpen)}>
          {isOpen ? <IconXMark className='w-5 h-5' /> : <IconBar />}
          Menu
        </button>
      </div>
      <aside className='relative w-full lg:mt-16 lg:pt-1'>
        <div
          className={`fixed w-full h-full bg-white lg:block lg:max-w-[16rem] lg:top-auto ${
            isOpen ? "" : "hidden"
          }`}>
          <ul className='h-full overflow-y-auto space-y-px pb-32 text-gray-700 pt-6 lg:pb-28'>
            <li>
              <NavLink
                href='/docs'
                className='block text-[.9rem] rounded-lg hover:bg-gray-50'
                active='bg-gray-50 text-gray-800 font-medium'>
                Introduction
              </NavLink>
            </li>
            {sections.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  href={`/docs${item.slug}`}
                  className='block text-[.9rem] rounded-lg hover:bg-gray-50'
                  active='bg-gray-50 text-gray-800 font-medium'>
                  {item.section_name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};
