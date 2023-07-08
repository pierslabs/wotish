import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getUser } from '../../../db/supabase';
import { Profile } from '../../interfaces/profile.interface';
import { ClockerContext } from '../../context/ClockerContext';

const useUserForm = () => {
  // TODO: add context
  // TODO: make a custom hook for this
  const { user } = useContext(ClockerContext);
  const [userProfile, setUserProfile] = useState<Partial<Profile>>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    getUser(user.id).then(({ data }) => {
      const user = data && (data[0] as Profile);

      if (!user) return;

      setUserProfile({
        full_name: user.full_name || 'introduce tu nombre',
        dni: user.dni || 'introduce tu dni',
        email: user.email || 'introduce tu email',
        company: user.company || 'introduce tu empresa',
      });

      // Set values to form
      setValue('full_name', user.full_name);
      setValue('dni', user.dni || 'introduce tu dni');
      setValue('email', user.email);
    });
  }, []);
  //
  return { register, handleSubmit, errors, onSubmit, userProfile };
};

export default useUserForm;
