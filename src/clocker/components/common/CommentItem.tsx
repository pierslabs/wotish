import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

export interface CommentItemProps {
  stars: number;
  comment: string;
  user: string;
}
export type CardColor =
  | 'bg-red-400'
  | 'bg-orange-300'
  | 'bg-yellow-400'
  | 'bg-green-300'
  | 'bg-green-500';

const CommentItem: FC<CommentItemProps> = ({ stars, comment, user }) => {
  const colorCard: Record<number, CardColor> = {
    1: 'bg-red-400',
    2: 'bg-orange-300',
    3: 'bg-yellow-400',
    4: 'bg-green-300',
    5: 'bg-green-500',
  };

  return (
    <div className={`${colorCard[stars]} rounded-lg p-4 shadow`}>
      <div>
        <div className='flex bg justify-end gap-3 items-center mb-2'>
          <p className='text-xl'>{stars}</p>
          <AiFillStar color='yellow' size={25} />
        </div>
        <hr />
        <div className='mt-3'>
          <p>{comment}</p>
          <div className='flex justify-end mt-3'>
            <p className=' text-slate-700 mt-3'>{user}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
