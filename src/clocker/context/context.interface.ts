import { NavbarColor } from '../components/Navbar/navbar.enum';

export interface ClockerContextData {
  isSidebarOpen: boolean;
  handleSideBarOpen: (value: boolean) => void;
  handleModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  user: User;
  profile: Profile | undefined;
  handleUpdateProfile: () => Promise<void>;
  handleNavbarColor: (color: NavbarColor) => void;
  navbarColor: string;
  notificationData: NotificationData;
  handleNotificationData: (notification: NotificationData) => void;
}

export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: Date;
  phone: string;
  dni?: string;
  confirmed_at: Date;
  last_sign_in_at: Date;
  app_metadata: AppMetadata;
  user_metadata: Data;
  identities: Identity[];
  created_at: Date;
  updated_at: Date;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface Identity {
  id: string;
  user_id: string;
  identity_data: Data;
  provider: string;
  last_sign_in_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Data {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
}

export interface Profile {
  id: string;
  full_name: string;
  dni: string;
  email: string;
  avatar: string;
  company: string;
  id_profile: string;
  phone?: string;
}

export interface NotificationData {
  open: boolean;
  message: string;
  alert: boolean;
}
