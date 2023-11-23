"use client";

import Image from "next/image";
import preview1 from "public/preview-1.svg";
import preview2 from "public/preview-2.svg";
import preview3 from "public/preview-3.svg";

export default () => {
  return (
    <div className="flex-1 relative overflow-hidden border border-zinc-800 rounded-2xl p-8 bg-[linear-gradient(180deg,_rgba(15,_23,_42,_0.65)_0%,_rgba(24,_24,_27,_0.00)_100%)]">
      <h3 className="text-zinc-100 font-semibold">Ready to use templates</h3>
      <p className="text-zinc-300 max-w-md mt-3">
        Explore pre-designed templates to quickly begin building your
        application or website.
      </p>
      <div className="flex mt-8 group h-52 sm:h-64 md:h-auto">
        <Image
          src={preview3}
          className="flex-1 absolute group-hover:right-60 right-24 -bottom-6 duration-500"
          alt=""
        />
        <Image
          src={preview2}
          className="flex-1 absolute group-hover:right-32 right-12 bottom-0 duration-500"
          alt=""
        />
        <Image
          src={preview1}
          className="flex-1 absolute group-hover:-right-12 -right-20 bottom-0 duration-500"
          alt=""
        />
      </div>
    </div>
  );
};
