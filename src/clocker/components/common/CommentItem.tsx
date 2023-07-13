import moment from 'moment';
import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

export interface CommentItemProps {
  stars: number;
  comment: string;
  user: string;
  created_at: string;
}
export type CardColor =
  | 'bg-red-400'
  | 'bg-orange-300'
  | 'bg-yellow-400'
  | 'bg-green-300'
  | 'bg-green-500';

const CommentItem: FC<CommentItemProps> = ({
  stars,
  comment,
  user,
  created_at,
}) => {
  const colorCard: Record<number, CardColor> = {
    1: 'bg-red-400',
    2: 'bg-orange-300',
    3: 'bg-yellow-400',
    4: 'bg-green-300',
    5: 'bg-green-500',
  };

  const date = moment(created_at).format('DD/MM/YYYY');
  return (
    <div className={`${colorCard[stars]} rounded-lg p-4 shadow`}>
      <div>
        <div className='flex justify-between items-baseline px-5 py-2 text-gray-600 rounded-full'>
          <div className='text-gray-700'>{date}</div>
          <div className='flex bg justify-end gap-3 items-center '>
            <p className='text-xl'>{stars}</p>
            <AiFillStar color='yellow' size={25} />
          </div>
        </div>
        <hr />
        <br />
        <div className='mt-3'>
          <p>{comment}</p>
          <br />
          <div className='flex justify-end '>
            <p className=' text-slate-700 '>{user}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
