import { useContext, useEffect, useState } from 'react';
import { Profile } from '../clocker/context/context.interface';
import { useForm } from 'react-hook-form';
import { getUser, updateUser } from '../db/supabase';
import { ClockerContext } from '../clocker/context/ClockerContext';
import { toast } from 'react-toastify';

const useUserForm = () => {
  const { user, handleModalOpen, handleUpdateProfile } =
    useContext(ClockerContext);
  const [userProfile, setUserProfile] = useState<Partial<Profile>>();
  const [loading, setLoading] = useState(false);
  const dniRegex = /^\d{8}[A-HJ-NP-TV-Z]$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    reValidateMode: 'onBlur',
    mode: 'onTouched',
    shouldUseNativeValidation: false,
  });

  const onSubmit = async (data: Partial<Profile>) => {
    setLoading(true);
    try {
      const res = await updateUser(user.id, data);

      if (res.error) {
        return toast.error('Error al actualizar el usuario');
      }
      await handleUpdateProfile();
      handleModalOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('Error al actualizar el usuario');
    }

    setLoading(false);
  };

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
      setValue('dni', user.dni);
      setValue('email', user.email);
    });
  }, [setValue, user.id]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    userProfile,
    loading,
    dniRegex,
  };
};

export default useUserForm;
