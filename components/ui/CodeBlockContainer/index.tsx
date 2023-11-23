import SyntaxHeighlight from "components/SyntaxHeighlight";
import { ReactNode, useEffect, useRef, useState } from "react";

export default ({
  code,
  activatedBlock,
  techStack,
  slug,
}: {
  code: string;
  activatedBlock: number;
  techStack: string;
  slug: string;
}) => {
  const [copied, setCopyed] = useState(false);
  const codeBlockRef = useRef<HTMLDivElement>(null);

  const copyCode = () => {
    const textare = document.createElement("textarea");
    textare.textContent = (codeBlockRef.current as HTMLDivElement).textContent;
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
    <div className="relative">
      <button
        className="absolute top-3 right-6 p-1 flex items-center justify-center font-medium text-gray-300 text-sm bg-gray-600 rounded-md"
        onClick={copyCode}
      >
        {copied ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            copied
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            copy
          </>
        )}
      </button>
      <div className="code-block" ref={codeBlockRef}>
        <SyntaxHeighlight
          code={code}
          //   dir={dir}
          //   activatedBlock={activatedBlock}
          //   techStack={techStack}
          //   slug={slug}
        />
      </div>
    </div>
  );
};
