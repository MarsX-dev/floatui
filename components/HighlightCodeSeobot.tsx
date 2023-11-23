"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.min.css";

export default function HighlightCodeSeobot() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return null;
}
