import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getUser, updateUser } from '../../../db/supabase';
import { ClockerContext } from '../../context/ClockerContext';
import { toast } from 'react-toastify';
import { Profile } from '../../context/context.interface';

const useUserForm = () => {
  const { user, handleModalOpen, handleUpdateProfile } =
    useContext(ClockerContext);
  const [userProfile, setUserProfile] = useState<Partial<Profile>>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

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
      setValue('dni', user.dni || 'introduce tu dni');
      setValue('email', user.email);
    });
  }, [setValue, user.id]);

  return { register, handleSubmit, errors, onSubmit, userProfile, loading };
};

export default useUserForm;
