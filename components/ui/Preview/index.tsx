"use client";

import PreviewSwitch from "components/ui/PreviewSwitch";
import { useEffect, useState } from "react";
import Viewport from "viewport";
import * as Tabs from "@radix-ui/react-tabs";
import { IconHTML, IconReact, IconSvelte, IconVue } from "components/icons";
import SyntaxHeighlight from "components/SyntaxHeighlight";
import { CheckIcon, Square2StackIcon } from "@heroicons/react/24/outline";
import MDXRemoteClient from "components/MDXRemoteClient";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import componentsNames from "componentsNames";
import TabsTrigger from "../Tabs/TabsTrigger";
import { motion } from "framer-motion";

const tabs = [
  {
    name: "React.js",
    icon: <IconReact />,
    value: "react",
  },
  {
    name: "HTML",
    icon: <IconHTML />,
    value: "html",
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

export default ({
  item,
  mdxSource,
  slug,
}: {
  item: any;
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
}) => {
  const [isPreview, setPreview] = useState<boolean>(true);
  const [selectedFramework, setFramework] = useState("react");
  const [copied, setCopyed] = useState(false);

  const fullTech = {
    react: "jsxTail",
    vue: "vueTail",
    html: "htmlTail",
    svelte: "svelteTail",
  }[selectedFramework];

  const previewCode: string = item.ltr?.preview;

  const copyCode = (code: string) => {
    const textare = document.createElement("textarea");
    textare.textContent = code;
    document.body.append(textare);
    textare.select();
    document.execCommand("copy");
    textare.remove();
    setCopyed(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopyed(false), 2000);
    }
  }, [copied]);

  return (
    <>
      <div className="items-start justify-between sm:flex">
        <h3 className="text-sm text-zinc-300 font-medium py-4">
          {item?.title}
        </h3>
        <div className="flex gap-3 items-center my-3 sm:mt-0">
          <PreviewSwitch preview={isPreview} setPreview={setPreview} />
        </div>
      </div>
      {isPreview ? (
        <Viewport>
          <MDXRemoteClient mdxSource={mdxSource} components={componentsNames} />
        </Viewport>
      ) : (
        ""
      )}
      {!isPreview ? (
        <Tabs.Root
          onValueChange={(val) => setFramework(val)}
          className="relative flex-1 overflow-hidden rounded-2xl border border-zinc-800"
          defaultValue={selectedFramework}
        >
          <Tabs.List
            className="flex items-center px-4 py-2 border-b border-b-zinc-800 overflow-auto bg-[linear-gradient(175deg,_rgba(24,_24,_27,_0.80)_3.95%,_rgba(24,_24,_27,_0.00)_140.01%)]"
            aria-label="Switch between supported frameworks"
          >
            {tabs.map((item, idx) => (
              <TabsTrigger
                key={idx}
                value={item.value}
                selectedTab={selectedFramework}
              >
                <div className="flex items-center gap-x-2 relative z-10">
                  {item.icon}
                  {item.name}
                </div>
              </TabsTrigger>
            ))}
          </Tabs.List>
          {item.ltr[selectedFramework] &&
          item.ltr[selectedFramework][fullTech as string].length > 0 ? (
            <button
              className="w-7 h-7 absolute top-16 right-6 flex items-center justify-center font-medium text-zinc-300 text-sm hover:bg-zinc-600 rounded-md duration-200"
              onClick={() =>
                copyCode(item.ltr[selectedFramework].jsxTail[0].code)
              }
            >
              {copied ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                <Square2StackIcon className="w-5 h-5" />
              )}
            </button>
          ) : (
            ""
          )}
          {tabs.map((tab, idx) => (
            <Tabs.Content
              key={idx}
              className="overflow-auto p-4 delay-1000 duration-1000 data-[state=inactive]:opacity-0 data-[state=active]:opacity-1"
              value={tab.value}
            >
              {item.ltr[selectedFramework] &&
              item.ltr[selectedFramework][fullTech as string].length > 0 ? (
                <motion.div
                  className="opacity-0 h-[640px]"
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9 }}
                >
                  <SyntaxHeighlight
                    code={
                      item.ltr[selectedFramework][fullTech as string][0]?.code
                    }
                  />
                </motion.div>
              ) : (
                <div className="py-20 bg-zinc-800 rounded-xl text-center text-white text-lg font-semibold">
                  In progress...
                </div>
              )}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      ) : (
        ""
      )}
    </>
  );
};
