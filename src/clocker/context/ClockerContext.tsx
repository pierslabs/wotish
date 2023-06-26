import { createContext, useCallback, useMemo, useState } from "react";

export interface ClockerContextData {
  isSidebarOpen: boolean;
  handleSideBarOpen: (value: boolean) => void;
}

export const ClockerContext = createContext({} as ClockerContextData);

interface ClockerProviderProps {
  children: React.ReactNode;
}

export function ClockerProvider({ children }: ClockerProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBarOpen = useCallback((value: boolean) => {
    setIsSidebarOpen(value);
  }, []);

  const values = useMemo(
    () => ({
      isSidebarOpen,
      handleSideBarOpen,
    }),
    [isSidebarOpen, handleSideBarOpen]
  );

  return (
    <ClockerContext.Provider value={values}>{children}</ClockerContext.Provider>
  );
}
