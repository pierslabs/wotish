import { createContext, useCallback, useMemo, useState } from 'react';
import { ClockerContextData, User } from './context.interface';
import { getLocalStorage } from '../../utils/getLocalStorage';

export const ClockerContext = createContext({} as ClockerContextData);

interface ClockerProviderProps {
  children: React.ReactNode;
}

export function ClockerProvider({ children }: ClockerProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBarOpen = useCallback((value: boolean) => {
    setIsSidebarOpen(value);
  }, []);

  const { user }: { user: User } = getLocalStorage(
    'sb-rmcdrbqhfgckghhsjdyt-auth-token'
  );

  const values = useMemo(
    () => ({
      isSidebarOpen,
      handleSideBarOpen,
      user,
    }),
    [isSidebarOpen]
  );
  console.log('render');
  return (
    <ClockerContext.Provider value={values}>{children}</ClockerContext.Provider>
  );
}
