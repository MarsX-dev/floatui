"use client";

import { usermavenClient, UsermavenClient } from "@usermaven/sdk-js";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    // Init Usermaven
    const usermaven: UsermavenClient = usermavenClient({
      key: process.env.ANALYTICS_KEY as string,
      tracking_host: "https://events.usermaven.com",
    });
  }, []);

  return <></>;
};
