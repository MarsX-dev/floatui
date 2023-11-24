"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { IconHTML, IconReact, IconSvelte, IconVue } from "components/icons";
import SyntaxHeighlight from "components/SyntaxHeighlight";
import supportedFrameworksJSON from "utils/supportedFrameworksJSON";
import { m } from "framer-motion";
import { useState } from "react";
import TabsTrigger from "../Tabs/TabsTrigger";
import LazyMotionWrapper from "components/LazyMotionWrapper";

export default () => {
  const [selectedTab, setSelectedTab] = useState("html");

  const tabs = [
    {
      name: "HTML",
      icon: <IconHTML />,
      value: "html",
    },
    {
      name: "React.js",
      icon: <IconReact />,
      value: "react",
    },
    {
      name: "Vue.js",
      icon: <IconVue />,
      value: "vue",
    },
    {
      name: "Svelte.js",
      icon: <IconSvelte />,
      value: "svelte",
    },
  ];

  return (
    <Tabs.Root
      className="flex-1 overflow-hidden rounded-2xl border border-zinc-800"
      defaultValue={selectedTab}
      onValueChange={(value) => setSelectedTab(value)}
    >
      <Tabs.List
        className="flex items-center px-4 py-2 border-b border-b-zinc-800 overflow-auto bg-[linear-gradient(175deg,_rgba(24,_24,_27,_0.80)_3.95%,_rgba(24,_24,_27,_0.00)_140.01%)]"
        aria-label="Switch between supported frameworks"
      >
        {tabs.map((item, idx) => (
          <TabsTrigger key={idx} value={item.value} selectedTab={selectedTab}>
            <div className="flex items-center gap-x-2 relative z-10">
              {item.icon}
              {item.name}
            </div>
          </TabsTrigger>
        ))}
      </Tabs.List>
      {supportedFrameworksJSON.map((item, idx) => (
        <Tabs.Content
          key={idx}
          className="h-[640px] overflow-auto p-4 delay-1000 duration-1000 data-[state=inactive]:opacity-0 data-[state=active]:opacity-1"
          value={item.value}
        >
          <LazyMotionWrapper>
            <m.div
              className="opacity-0"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <SyntaxHeighlight code={item.code} />
            </m.div>
          </LazyMotionWrapper>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
