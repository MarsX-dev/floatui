import mergeTW from "utils/mergeTW";
import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { buttonVariants } from "components/variants";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "default" | "shiny";
}

export default ({
  children,
  href,
  className = "",
  variant = "default",
  ...props
}: Props) => (
  <Link
    {...props}
    href={href}
    className={mergeTW(`${buttonVariants[variant]} ${className}`)}
  >
    {children}
  </Link>
);
