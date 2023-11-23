"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default () => {
  return (
    <>
      <ProgressBar
        height="2px"
        color="#3b82f6"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
