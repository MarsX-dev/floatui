import Link from "next/link";
import { ReactNode } from "react";

const NavLink = ({ ...props }) => {
  const {
    children,
    href = "",
    className = "",
  }: {
    children?: ReactNode;
    href?: string;
    className?: string;
  } = props;
  return (
    <Link
      href={href}
      {...props}
      className={`py-2.5 px-4 text-center rounded-full duration-150 ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;
