import { Component } from "@/types";
import { createPortal } from "react-dom";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

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

export default ({ component }: { component: Component | undefined }) => {
  const containerRef = useRef<HTMLIFrameElement>(null);
  const [previewComponent, setPreviewComponent] = useState<ReactNode>();

  useEffect(() => {
    const code = component?.ltr.preview;
    const modules: string[] = [
      "React",
      "useState",
      "useEffect",
      "useCallback",
      "useMemo",
      "useRef",
    ];

    const func = new Function(...modules, `return ${code}`);
    const App = func(React, useState, useEffect, useCallback, useMemo, useRef);
    const iframeEl = containerRef.current as HTMLIFrameElement | any;
    setTimeout(() => {
      setPreviewComponent(
        createPortal(<App />, iframeEl.contentWindow.document.body)
      );
    }, 300);

    setInterval(() => {
      handleIframeHeight();
    }, 100);
  }, [component]);

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
      className='w-full min-h-[300px] appearance-none border rounded-xl overflow-hidden'>
      {previewComponent}
    </iframe>
  );
};
