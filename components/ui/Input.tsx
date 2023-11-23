import mergeTW from "utils/mergeTW";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  type?: "text" | "email" | "password";
  name?: string;
  validate?: {};
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export default ({ className, required, validate, ...props }: Props) => (
  <input
    {...props}
    className={mergeTW(
      `px-3 py-2 bg-zinc-800/70 hover:bg-zinc-800/40 focus:bg-zinc-800/40 text-sm text-zinc-300 placeholder-zinc-500 outline-none border border-zinc-800 focus:border-zinc-600 shadow-sm rounded-lg duration-200 ${className}`
    )}
  ></input>
);
