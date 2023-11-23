import mergeTW from "utils/mergeTW";

export default ({
  className = "",
  isActive,
  setActive = () => null,
  ...props
}: {
  isActive: boolean;
  setActive?: (bool: boolean) => void;
  className?: string;
}) => (
  <div
    {...props}
    className={mergeTW(
      `${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      } transform duration-200 z-10 fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm ${className}`
    )}
    onClick={() => setActive(false)}
  ></div>
);
