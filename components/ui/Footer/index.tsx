"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default () => {
  const pathname = usePathname();
  const isInComponentsPage = pathname.includes("/components");
  return !isInComponentsPage ? <Footer /> : <></>;
};
