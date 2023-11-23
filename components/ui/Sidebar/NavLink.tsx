import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import mergeTW from "utils/mergeTW";

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

  const pathname = usePathname();

  const isActive: boolean = pathname == href;
  const activeClass = isActive ? active : "";

  return (
    <Link
      href={href}
      {...props}
      className={mergeTW(
        "block relative z-10 rounded-lg px-3 py-2 transition-colors duration-150 group",
        activeClass,
        className
      )}
    >
      <span
        className={`pl-6 py-0.5 border-l group-hover:border-indigo-500 duration-150 ${
          isActive ? "border-indigo-500" : "border-transparent"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
