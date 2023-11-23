import { ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import LazyMotionWrapper from "components/LazyMotionWrapper";

export default ({
  children,
  value,
  selectedTab,
}: {
  children: ReactNode;
  value: any;
  selectedTab: any;
}) => (
  <Tabs.Trigger
    className="relative py-2 px-3 rounded-full text-sm text-zinc-400 hover:text-zinc-100 data-[state=active]:text-zinc-100"
    value={value}
  >
    {children}
    {selectedTab == value ? (
      <LazyMotionWrapper>
        <motion.span
          className="absolute inset-0 rounded-full border border-zinc-700 bg-[linear-gradient(185deg,_rgba(39,_39,_42,_0.95)_70%,_rgba(15,_23,_42,_0.00)_140.23%)]"
          layoutId="bubble"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        ></motion.span>
      </LazyMotionWrapper>
    ) : (
      ""
    )}
  </Tabs.Trigger>
);
