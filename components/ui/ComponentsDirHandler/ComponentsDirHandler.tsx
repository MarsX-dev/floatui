import ButtonDir from "./ButtonDir";
import { useAppContext } from "@/context/contextApp";
import { useEffect } from "react";

export default () => {
  const { dir, setDir } = useAppContext();

  useEffect(() => {
    const getDir = localStorage.getItem("dir") || "ltr";
    setDir(getDir);
  }, []);

  const handleDirection = (val: string) => {
    localStorage.setItem("dir", val);
    setDir(val);
  };

  return (
    <div className='px-4 mb-6'>
      <h2 className='text-gray-900'>Change direction</h2>
      <div className='flex items-center justify-between mt-3 p-1 w-32 border rounded-md text-gray-700'>
        <ButtonDir
          className={dir == "ltr" ? "bg-gray-100" : ""}
          onClick={() => handleDirection("ltr")}>
          LTR
        </ButtonDir>
        <ButtonDir
          className={dir == "rtl" ? "bg-gray-100" : ""}
          onClick={() => handleDirection("rtl")}>
          RTL
        </ButtonDir>
      </div>
    </div>
  );
};
