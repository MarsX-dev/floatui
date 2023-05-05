import { Component } from "@/types";
import React, { useEffect, useState, useRef } from "react";

export default ({
  component,
  dir,
}: {
  component: Component | undefined;
  dir: string;
}) => {
  const containerRef = useRef<HTMLIFrameElement>(null);
  const [previewComponent, setPreviewComponent] = useState<string>();

  const componentDir = dir == "ltr" ? "ltr" : "rtl";

  useEffect(() => {
    const code = component?.[componentDir].preview;

    const temp = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet" />
              <link rel="stylesheet" href="/tailwind.css" />
              <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
              <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
              <title>Document</title>
          </head>
          <body class="body ${dir == "rtl" ? "ar-font" : ""}" dir="${dir}">
            <div id="app"></div>

            <script crossorigin data-type="module" data-plugins="" data-presets="react, env" type="text/babel">
                ${code}
                ReactDOM.render(<App />, document.getElementById('app'))
            </script>
          </body>
          </html>
          `;
    setPreviewComponent(temp);
    setInterval(() => {
      handleIframeHeight();
    }, 100);

    window.onresize = () => handleIframeHeight();
  }, [component, componentDir]);

  const handleIframeHeight = () => {
    const iframeEl = containerRef.current as HTMLIFrameElement;
    const iframeHeight = iframeEl?.contentWindow?.document?.body?.scrollHeight;
    if (iframeEl && iframeEl.style) iframeEl.style.height = `${iframeHeight}px`;
  };

  return (
    <div className='w-full overflow-hidden border dark:border-gray-700 rounded-xl'>
      <iframe
        ref={containerRef}
        srcDoc={previewComponent}
        className='w-full min-h-[300px] appearance-none p-0 m-0'></iframe>
    </div>
  );
};
