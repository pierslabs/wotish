import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ClockerContextData, Profile, User } from './context.interface';
import { getLocalStorage } from '../../utils/getLocalStorage';
import { useLocation } from 'react-router-dom';
import { createProfile, getUser } from '../../db/supabase';

export const ClockerContext = createContext({} as ClockerContextData);

interface ClockerProviderProps {
  children: React.ReactNode;
}

export function ClockerProvider({ children }: ClockerProviderProps) {
  // user: User
  const { user }: { user: User } = getLocalStorage(
    'sb-rmcdrbqhfgckghhsjdyt-auth-token'
  );
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>();

  const handleSideBarOpen = useCallback((value: boolean) => {
    setIsSidebarOpen(value);
  }, []);

  const handleModalOpen = useCallback((value: boolean) => {
    setIsModalOpen(value);
  }, []);

  const handleProfile = useCallback(async (profile: Profile) => {
    setProfile(profile);
  }, []);

  const handleUpdateProfile = useCallback(async () => {
    try {
      const res = await getUser(user.id);
      if (res.data) {
        handleProfile(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Effects

  useEffect(() => {
    createProfile(user);
  }, [user]);

  useEffect(() => {
    getUser(user.id)
      .then((res) => {
        if (res.data) {
          setProfile(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  useEffect(() => {
    if (location.pathname !== currentLocation.pathname) {
      handleSideBarOpen(false);
      setCurrentLocation(location);
    }
  }, [currentLocation.pathname, handleSideBarOpen, location]);

  // Values
  const values = useMemo(
    () => ({
      isSidebarOpen,
      handleSideBarOpen,
      isModalOpen,
      handleModalOpen,
      user,

      handleUpdateProfile,
      profile,
    }),
    [isSidebarOpen, isModalOpen, profile]
  );

  console.log('render');
  return (
    <ClockerContext.Provider value={values}>{children}</ClockerContext.Provider>
  );
}
