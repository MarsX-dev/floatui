"use client";

import HeroBgGradient from "components/HeroBgGradient";
import LinkItem from "../LinkItem";
import TailwindBrand from "../TailwindBrand";
import { IconGithub } from "components/icons";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="custom-screen mt-20">
      <div className="relative z-10 max-w-xl mx-auto space-y-4 text-center">
        <div
          ref={ref}
          className={`pb-4 delay-500 duration-1000 ${
            isInView ? "opacity-1" : "opacity-0"
          }`}
        >
          <TailwindBrand className="mx-auto" />
        </div>
        <h1 className="text-5xl heading">Build and ship fast</h1>
        <p className="text-zinc-400">
          Move faster with beautiful, responsive UI components and website
          templates with modern design, 100% free and open-source.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LinkItem
            href="/"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Get started
          </LinkItem>
          <LinkItem
            href="https://github.com/MarsX-dev/floatui"
            variant="shiny"
            className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto"
            target="_blank"
          >
            <IconGithub className="w-5 h-5" />
            Star on GithHub
          </LinkItem>
        </div>
      </div>
      <HeroBgGradient
        height={isInView ? 444 : 0}
        className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:-translate-x-10"
      />
    </section>
  );
};
