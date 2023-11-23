import { IconLoading } from "components/icons";
import mergeTW from "utils/mergeTW";
import { HTMLAttributes, ReactNode, RefObject } from "react";
import { buttonVariants } from "components/variants";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  child?: ReactNode;
  className?: string;
  isLoad?: boolean;
  variant?: "shiny" | "default";
  type?: "button" | "submit" | "reset";
  ref?: RefObject<HTMLButtonElement>;
}

export default ({
  children,
  child,
  className = "",
  variant = "default",
  isLoad = false,
  ...props
}: Props) => {
  const variants = {
    shiny:
      "py-2.5 px-3 font-medium text-center text-white active:shadow-none rounded-lg shadow bg-zinc-700 md:bg-[linear-gradient(179.23deg,_#1E293B_0.66%,_rgba(30,_41,_59,_0)_255.99%)] hover:bg-zinc-800 duration-150",
    default:
      "py-2.5 px-3 rounded-lg duration-150 font-medium text-center text-sm text-white bg-orange-500",
  };

  return (
    <button
      {...props}
      className={mergeTW(
        `${buttonVariants[variant]} ${
          isLoad
            ? "flex items-center justify-center pointer-events-none opacity-70"
            : ""
        } ${className}`
      )}
    >
      {isLoad ? <IconLoading /> : ""}
      {!isLoad && child ? <div className="-ml-1 mr-3">{child}</div> : ""}
      {children}
    </button>
  );
};
