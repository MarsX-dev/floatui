"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default () => {
  const pathname = usePathname();
  const isInComponentsPage = pathname.includes("/components");
  return (
    <div
      className={
        isInComponentsPage
          ? "sticky z-50 top-0 bg-zinc-950 border-zinc-800 xl:border-b"
          : ""
      }
    >
      <Navbar />
    </div>
  );
};
