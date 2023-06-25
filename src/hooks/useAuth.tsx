import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../db/supabase";
import { EAuthStatus } from "../enum/authStatus.enum";

const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<EAuthStatus>(EAuthStatus.LOADING);
  const authenticated = session?.user.aud ?? false;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setStatus(EAuthStatus.LOADING);
      setSession(session);
      setStatus(EAuthStatus.DONE);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { session, supabase, status, authenticated };
};

export default useAuth;
