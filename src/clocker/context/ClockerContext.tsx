import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ClockerContextData, User } from './context.interface';
import { getLocalStorage } from '../../utils/getLocalStorage';
import { useLocation } from 'react-router-dom';
import { createProfile } from '../../db/supabase';

export const ClockerContext = createContext({} as ClockerContextData);

interface ClockerProviderProps {
  children: React.ReactNode;
}

export function ClockerProvider({ children }: ClockerProviderProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location);

  const handleSideBarOpen = useCallback((value: boolean) => {
    setIsSidebarOpen(value);
  }, []);

  // user: User
  const { user }: { user: User } = getLocalStorage(
    'sb-rmcdrbqhfgckghhsjdyt-auth-token'
  );

  // Values
  const values = useMemo(
    () => ({
      isSidebarOpen,
      handleSideBarOpen,
      user,
    }),
    [handleSideBarOpen, isSidebarOpen, user]
  );

  //Effects
  useEffect(() => {
    if (location.pathname !== currentLocation.pathname) {
      handleSideBarOpen(false);
      setCurrentLocation(location);
    }
  }, [currentLocation.pathname, handleSideBarOpen, location]);

  useEffect(() => {
    createProfile(user);
  }, [user]);

  return (
    <ClockerContext.Provider value={values}>{children}</ClockerContext.Provider>
  );
}
