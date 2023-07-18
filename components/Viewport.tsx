import { Component } from "@/types";
import { createPortal } from "react-dom";
import React, { ReactNode, useEffect, useState, useRef } from "react";
import ComponentDir from "./ComponentDir";

const template: string = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/tailwind.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet" />
    <title>Document</title>
</head>
<body class="body">

</body>
</html>
`;

export default ({
  component,
  dir,
}: {
  component: Component | undefined;
  dir: string;
}) => {
  const containerRef = useRef<HTMLIFrameElement>(null);
  const [previewComponent, setPreviewComponent] = useState<ReactNode>();

  const componentDir = dir == "ltr" ? "ltr" : "rtl";

  useEffect(() => {
    const code = component?.[componentDir].preview;
    const modules: string[] = ["React"];

    const func = new Function(...modules, `return ${code}`);
    const App = func(React);
    const iframeEl = containerRef.current as HTMLIFrameElement | any;
    setTimeout(() => {
      setPreviewComponent(
        createPortal(
          <ComponentDir dir={componentDir}>
            <App />
          </ComponentDir>,
          iframeEl.contentWindow.document.body
        )
      );
    }, 300);

    setInterval(() => {
      handleIframeHeight();
    }, 100);
  }, [component, componentDir]);

  const handleIframeHeight = () => {
    const iframeEl = containerRef.current as HTMLIFrameElement;
    if (iframeEl) {
      const iframeHeight = iframeEl?.contentWindow?.document.body.offsetHeight;
      iframeEl.style.height = `${Number(iframeHeight) + 12}px`;
    }
  };

  return (
    <iframe
      ref={containerRef}
      srcDoc={template}
      className="w-full min-h-[300px] appearance-none border rounded-xl overflow-hidden"
    >
      {previewComponent}
    </iframe>
  );
};
