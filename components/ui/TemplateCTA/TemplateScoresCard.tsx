"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default () => {
  const [progressCount, setProgressCount] = useState(5);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && progressCount < 95) {
      setTimeout(() => {
        setProgressCount((count) => count + 1);
      }, 50);
    }
  }, [progressCount, isInView]);

  return (
    <div className="flex-none border border-zinc-800 rounded-2xl p-8 bg-[linear-gradient(180deg,_rgba(15,_23,_42,_0.65)_0%,_rgba(24,_24,_27,_0.00)_100%)] w-full md:max-w-sm lg:max-w-md">
      <h3 className="text-zinc-100 font-semibold">Good template scores</h3>
      <p className="text-zinc-300 mt-3 max-w-sm">
        Our templates are made to be super fast, easy for everyone to use, and
        show up well on search engines.
      </p>
      <div ref={ref} className="mt-8">
        <div className="relative w-52 h-52 mx-auto rounded-full bg-green-500 flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-44 h-44 absolute">
            <path
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#047857"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-dasharray="100, 100"
            />
          </svg>
          <svg viewBox="0 0 36 36" className="w-44 h-44 relative z-10">
            <path
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#FFF"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-dasharray={`${progressCount}, 100`}
            />
          </svg>
          <span className="absolute font-extrabold text-6xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FAFAFA_0%,_rgba(250,_250,_250,_0.00)_332.5%)]">
            {progressCount}
          </span>
        </div>
      </div>
    </div>
  );
};
