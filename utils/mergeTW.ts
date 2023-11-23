import { twMerge } from "tailwind-merge";

export default (classNameValue: string, ...classes: string[]) =>
  twMerge(classNameValue, ...classes);
