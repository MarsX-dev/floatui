import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

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

  const [pathname, setPathname] = useState<string>("/");

  const isActive: boolean = pathname == href;
  const activeClass = isActive ? active : "";

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [props]);

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
