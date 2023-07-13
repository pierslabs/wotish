export interface CommentData {
  id: string;
  created_at: string;
  user_id: string;
  name: string;
  stars: number;
  user_assigned_id: string;
  comment: string;
}

export const fakeCommentData: CommentData[] = [
  {
    id: '1',
    stars: 5,
    created_at: '2023-11-11T18:20:00+01:00',
    user_id: '1',
    name: 'Mike Wazowski',
    user_assigned_id: 'user2',
    comment:
      '¡Gran trabajo hoy! Tu dedicación y enfoque han sido impresionantes. Gracias por ser un compañero tan confiable y motivado. Descansa bien.',
  },
  {
    id: '2',
    stars: 1,
    created_at: '2023-04-01T10:00:00-08:00',
    user_id: '3',
    name: 'Jack Sparrow',
    user_assigned_id: 'user1',
    comment:
      'Hoy hemos tenido muchos problemas con tu trabajo, espero que mejores',
  },
  {
    id: '3',
    stars: 4,
    created_at: '2023-02-15T08:30:00+00:00',
    user_id: '2',
    name: 'Marie Curie',
    user_assigned_id: 'user3',
    comment:
      'Gracias por tu valiosa contribución durante la jornada. Tu compromiso y profesionalismo han hecho la diferencia en nuestro equipo. Sigue así, ¡estamos orgullosos de tenerte como compañero! Descansa y disfruta de tu merecido descanso.',
  },
  {
    id: '4',
    stars: 3,
    created_at: '2023-06-04T16:45:00-05:00',
    user_id: '3',
    name: 'Jack Sparrow',
    user_assigned_id: 'user1',
    comment:
      '¡Bravo, compañero! Hoy demostraste una vez más tu talento y habilidades excepcionales. Tu dedicación y esfuerzo son admirables. Descansa y recarga energías para seguir brillando mañana. ¡Gracias por ser un valioso miembro del equipo!',
  },
  {
    id: '5',
    stars: 2,
    created_at: '2023-09-22T12:15:00+03:00',
    user_id: '2',
    name: 'Marie Curie',
    user_assigned_id: 'user3',
    comment: 'Podemos mejorar, pero no está mal',
  },
];
