import { useState } from "react";
import CodeBlock from "./CodeBlock";
import PreviewCodeHandler from "./ui/PreviewCodeHandler";
import Viewport from "./Viewport";

export default () => {
  const [isPreview, setPreview] = useState<boolean>(true);
  return (
    <>
      <div className='flex flex-wrap items-center gap-6 justify-between'>
        <h2 className='text-gray-800 font-medium'>Primary Newsletter</h2>
        <PreviewCodeHandler isPreview={isPreview} setPreview={setPreview} />
      </div>
      <div className='mt-4'>
        {isPreview ? (
          <Viewport />
        ) : (
          <CodeBlock>var i = 0; console.log('Hello')</CodeBlock>
        )}
      </div>
    </>
  );
};
