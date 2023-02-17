import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const NavLink = ({ ...props }) => {
  const {
    children,
    href = "",
    className = "",
    active = "",
  }: {
    children?: ReactNode;
    href?: string;
    className?: string;
    active?: string;
  } = props;

  const { asPath } = useRouter();

  const isActive: boolean = asPath == href;
  const activeClass = isActive ? active : "";

  return (
    <Link
      href={href}
      {...props}
      className={`py-2.5 px-4 rounded-full duration-150 ${activeClass} ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;
