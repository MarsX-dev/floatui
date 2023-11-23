"use client";

import { ReactNode, useRef } from "react";
import featureCover from "public/feature-cover.svg";
import Image from "next/image";

export default ({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => {
  const cardRef = useRef<HTMLLIElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left; // x position within the element.
      const y = e.clientY - top; // y position within the element.

      if (shadowRef.current) {
        shadowRef.current.style.top = `${y}px`;
        shadowRef.current.style.left = `${x}px`;
        shadowRef.current.style.transform = "translate(-50%, -50%)";
        (
          cardRef.current as any
        ).style = `--cursor-x: ${x}px; --cursor-y: ${y}px`;
      }
    }
  };

  return (
    <li
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative z-0 group overflow-hidden h-full border border-zinc-800 rounded-xl bg-[radial-gradient(500px_circle_at_var(--cursor-x)_var(--cursor-y),#22d3ee_0,transparent,transparent_70%)]"
    >
      <div className="space-y-3 relative z-10 p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.60)_0%,_rgba(24,_24,_27,_0.00)_100%)]">
        <div className="text-gray-500 w-9 h-9 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_0%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-zinc-700">
          {icon}
        </div>
        <h3 className="text-zinc-100 font-semibold">{title}</h3>
        <p className="text-zinc-300">{desc}</p>
        <div>
          <Image
            src={featureCover}
            alt="Float UI"
            className="absolute inset-0 -z-10"
          />
        </div>
      </div>
      <div
        ref={shadowRef}
        className="bg-[linear-gradient(180deg,_#1E293B_0%,_rgba(59,_130,_246,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[70px] opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150 group-hover:opacity-90"
      ></div>
      <div className="absolute inset-[1px] -z-10 rounded-xl bg-zinc-950"></div>
    </li>
  );
};
