import { Auth } from "@supabase/auth-ui-react";
import useAuth from "../hooks/useAuth";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  const { supabase } = useAuth();
  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
};

export default Login;
