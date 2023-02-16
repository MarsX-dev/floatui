import {
  IconArrowLongRight,
  IconBoxWidget,
  IconLayout,
} from "@/components/icons";
import { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
};

const featuresList: Feature[] = [
  {
    icon: <IconBoxWidget />,
    title: "UI components",
    desc: "UI components for React and Vue (soon) with Tailwind, every example support both directions LTR and RTL.",
    href: "https://floatui.com/components",
  },
  {
    icon: <IconLayout />,
    title: "Website templates",
    desc: "A collection of professional and beautifully designed website templates, built on top of React, Next.js and Vue (soon) with Tailwind CSS.",
    href: "https://floatui.com/templates",
  },
];

export default () => (
  <section className='custom-screen py-20 text-gray-600'>
    <div className='max-w-xl mx-auto text-center'>
      <h2 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
        Ship your next project faster
      </h2>
      <p className='mt-3'>
        With Float UI, developers can create stunning websites using modern UIs
        without spending hours coding from scratch.
      </p>
    </div>
    <div className='mt-12 max-w-4xl mx-auto'>
      <ul className='space-y-6 grid-cols-2 gap-6 sm:grid sm:space-y-0'>
        {featuresList.map((item: Feature, idx: number) => (
          <li key={idx}>
            <a
              href={item.href}
              target='_blank'
              className='block group space-y-3 p-4 rounded-lg border hover:bg-gradient-to-r from-gray-50 to-gray-100 sm:p-6'>
              <div>{item.icon}</div>
              <h3 className='flex items-center gap-x-0 group-hover:gap-x-3 text-gray-800 text-xl font-semibold duration-200'>
                {item.title}
                <IconArrowLongRight className='w-6 h-6 hidden group-hover:block' />
              </h3>
              <p>{item.desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
