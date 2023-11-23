import mergeTW from "utils/mergeTW";
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { buttonVariants } from "components/variants";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "shiny";
}

export default ({
  children,
  className = "",
  variant = "default",
  ...props
}: Props) => (
  <button
    {...props}
    className={mergeTW(`${buttonVariants[variant]} ${className}`)}
  >
    {children}
  </button>
);
