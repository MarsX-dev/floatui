import { Component } from "@/types";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import PreviewCodeHandler from "./ui/PreviewCodeHandler";
import Viewport from "./Viewport";

type Props = {
  component?: Component;
};

export default ({ component }: Props) => {
  const [isPreview, setPreview] = useState<boolean>(true);
  return (
    <>
      <div className='flex flex-wrap items-center gap-6 justify-between'>
        <h2 className='text-gray-800 text-sm font-medium'>
          {component?.title}
        </h2>
        <PreviewCodeHandler isPreview={isPreview} setPreview={setPreview} />
      </div>
      <div className='mt-4'>
        {isPreview ? (
          <Viewport component={component} />
        ) : (
          <CodeBlock>{component?.ltr?.react?.jsxTail[0].code}</CodeBlock>
        )}
      </div>
    </>
  );
};
