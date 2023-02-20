import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type ContextType = {
  dir: string;
  setDir: (val: string) => void;
};

// Create Context object.
const AppContext = createContext<ContextType>({
  dir: "ltr",
  setDir: (dir) => dir,
});

// Export Provider.
export function AppProvider(props: Props) {
  const { children } = props;

  const [dir, setDir] = useState("ltr");

  return (
    <AppContext.Provider
      value={{
        dir,
        setDir,
      }}>
      {children}
    </AppContext.Provider>
  );
}

// Export useContext Hook.
export function useAppContext() {
  return useContext(AppContext);
}
