import { ReactNode } from "react";

export default ({
  children,
  dir,
}: {
  children: ReactNode;
  dir: "ltr" | "rtl";
}) => (
  <div
    className={`${dir == "rtl" ? "ar-font" : ""}`}
    style={{ direction: dir }}>
    {children}
  </div>
);
