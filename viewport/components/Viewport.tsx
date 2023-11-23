import React, {
  MouseEvent,
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import template from "../template/index";

interface Props {
  children: React.ReactNode;
  dir?: string;
  srcDoc?: string;
}

const Viewport = ({ children, dir, srcDoc = template, ...props }: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [compContent, setCompContent] = useState<any>(null);
  const [pressure, setPressure] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframe = useRef<HTMLIFrameElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mouseup", mouseUp);
    setTimeout(() => {
      const iframeEl = iframe.current as any;
      const iframeDc = iframeEl.contentWindow.document;
      setCompContent(createPortal(children, iframeDc.body));
      setLoaded(true);
    }, 300);
  }, []);

  useEffect(() => {
    const checkAndHandleH = (iframeDc: any) => {
      if (iframeDc.body && iframeDc.body.childNodes[1]) {
        handleIframeHeight();
      }
    };

    if (loaded) {
      const iframeEl = iframe.current as HTMLIFrameElement;
      const iframeDc = iframeEl?.contentWindow?.document;
      checkAndHandleH(iframeDc);

      setInterval(() => {
        checkAndHandleH(iframeDc);
      }, 100);
    }
  }, [loaded, dir]);

  const handleEvent: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleIframeHeight = () => {
    const iframeEl = iframe.current as HTMLIFrameElement;
    const iframeHeight = iframeEl?.contentWindow?.document?.body?.scrollHeight;
    if (iframeEl && iframeEl.style) iframeEl.style.height = `${iframeHeight}px`;
  };

  const mouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    handleEvent(e);
    setPressure(true);
    iframeContainerRef?.current?.classList.add("pointer-events-none");
    const containerRefEl = containerRef.current as HTMLDivElement;
    containerRefEl.style.cursor = "ew-resize";
  };

  const mouseUp: any = (e: MouseEvent) => {
    handleEvent(e);
    setPressure(false);
    const iframeContainerRefEl =
      iframeContainerRef.current as HTMLIFrameElement;
    if (iframeContainerRefEl) {
      iframeContainerRefEl.classList.remove("pointer-events-none");
      const containerRefEl = containerRef.current as HTMLDivElement;
      containerRefEl.style.cursor = "";
    }
  };

  const mouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    handleEvent(e);
    const x =
      e.clientX - (e.target as HTMLDivElement).getBoundingClientRect().x;
    const containerW = (
      containerRef.current as HTMLDivElement
    ).getBoundingClientRect().width;
    if (pressure && x >= 400) {
      (iframeContainerRef.current as HTMLIFrameElement).style.width =
        x + 2 >= containerW ? "100%" : `${x}px`;
      handleIframeHeight();
    }
  };

  const touchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const containerW = (
      containerRef.current as HTMLDivElement
    ).getBoundingClientRect();
    const pageX = e.targetTouches[0].pageX - containerW.x;

    if (pageX >= 400) {
      (
        iframeContainerRef.current as HTMLIFrameElement
      ).style.width = `${pageX}px`;
      handleIframeHeight();
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden border border-zinc-800 rounded-lg"
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
      onTouchMove={touchMove}
    >
      <div
        ref={iframeContainerRef}
        className="relative max-w-full min-w-full h-auto sm:min-w-[400px] sm:flex"
      >
        <iframe
          srcDoc={template}
          ref={iframe}
          className="w-full bg-white appearance-none mr-4 min-h-[300px] iframes"
          id="iframe"
          loading="lazy"
        >
          {compContent}
        </iframe>
        <div
          className="absolute top-0 right-0 items-center hidden w-5 h-full bg-zinc-700 border-l border-zinc-800 sm:flex"
          style={{ cursor: "ew-resize" }}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-zinc-400 transform rotate-90 h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Viewport;
