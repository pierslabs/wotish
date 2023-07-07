import { AiFillStar, AiOutlineFieldTime } from 'react-icons/ai';
import { CardProps } from '../interfaces/card.interface';
import { FiUsers } from 'react-icons/fi';
import { BsCalendar3 } from 'react-icons/bs';
import { MdSentimentSatisfiedAlt } from 'react-icons/md';

export const CardsData: CardProps[] = [
  {
    title: 'Fichar',
    text: 'Registra tus horas de trabajo con un simple clic. Mantén un registro preciso y organizado de tus horarios laborales.',
    icon: <AiOutlineFieldTime size={30} color={'#07c3d8'} />,
    path: '/work-shift',
    key: 'Fichar',
  },
  {
    title: 'Modificar Usuario',
    text: ' Actualiza tu perfil de usuario, incluyendo tu información personal, datos de contacto y preferencias de notificación.',
    icon: <FiUsers size={25} color={'#2e10da'} />,
    path: '/user',
    key: 'user',
  },
  {
    title: 'Ver Turnos de Trabajo',
    text: 'Consulta tus turnos de trabajo programados y las horas registradas. Mantente informado sobre tus horarios laborales.',
    icon: <BsCalendar3 size={25} color={'#8c10da'} />,
    path: '/work-record',
    key: 'turnos',
  },
  {
    title: 'Satisfacción con el Trabajo',
    text: ' Comparte tu satisfacción y logros en el trabajo con tus compañeros. En nuestra empresa, valoramos tu salud emocional y física, y nos importa tu bienestar general.',
    icon: <MdSentimentSatisfiedAlt size={28} color={'#15db26'} />,
    path: '/wellness',
    key: 'bienestar',
  },
  {
    title: 'Valora a tus Compañeros',
    text: ' Valora a tus compañeros de trabajo utilizando un rango de estrellas. Reconoce y aprecia su desempeño y contribuciones en el equipo. Juntos construimos un ambiente laboral positivo y motivador.',
    icon: <AiFillStar size={28} color={'#f8d50b'} />,
    path: '/comments',
    key: 'comentarios',
  },
];

export default CardsData;
