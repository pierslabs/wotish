import { createClient } from '@supabase/supabase-js';
import { Profile, User } from '../clocker/context/context.interface';

export const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

export const supabaseLogOut = async () => {
  await supabase.auth.signOut();
};

export const getUsers = async () => {
  const { data, error } = await supabase.auth.admin.listUsers();
  return { data, error };
};

export const getUser = async (id: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id);
  return { data, error };
};

export const updateUser = async (id: string, updates: Partial<Profile>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', id);
  return { data, error };
};

export const createProfile = async (user: User) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id);

    if (error) return;

    if (data?.length === 0) {
      const { avatar_url, full_name } = user.user_metadata;

      const { data: companyData, error: companyError } = await supabase
        .from('company')
        .select('*')
        .eq('name', 'caldimoni');

      if (companyError) return;

      await supabase.from('profiles').insert({
        id: user.id,
        full_name,
        avatar: avatar_url,
        email: user.email,
        company: companyData[0].id,
      });
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

// CLockers
export const createNewCLocker = async (userId: string) => {
  try {
    const res = await supabase
      .from('clockers')
      .insert({
        id_profile: userId,
        active: true,
      })
      .select();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateCLocker = async (clockerId: number) => {
  try {
    const res = await supabase
      .from('clockers')
      .update({
        active: false,
        exit: new Date().toISOString(),
      })
      .eq('id', clockerId)
      .select();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getLastActiveClocker = async (userId: string) => {
  try {
    const res = await supabase
      .from('clockers')
      .select()
      .eq('id_profile', userId)
      .eq('active', true)
      .order('created_at', { ascending: false })
      .limit(1);

    return res;
  } catch (error) {
    console.log(error);
  }
};
