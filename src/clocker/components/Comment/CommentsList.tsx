import { FC } from 'react';
import CommentItem from '../common/CommentItem';
import { CommentData, fakeCommentData } from '../../data/fakeComments';
import { ShowSelected } from '../../pages/User';
import EmptyState from '../emptyState/EmptyState';
import Loader from '../common/Loader';

export interface CommentListProps {
  showTabSelected: ShowSelected;
}

const CommentsList: FC<CommentListProps> = ({ showTabSelected }) => {
  const loading = false;
  return (
    <section
      className={`${
        showTabSelected.comments ? 'opacity-100' : 'opacity-0 hidden'
      } transition duration-1000`}
    >
      <h1 className='text-2xl mr-auto mt-6 p-3'>
        Comentarios de tus compañeros
      </h1>
      <hr />

      {loading && <Loader />}
      {fakeCommentData.length === 0 && (
        <EmptyState text='Aún no has recibido comentarios.' />
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
        {fakeCommentData.map((comment: CommentData) => (
          <CommentItem
            key={comment.id}
            stars={comment.stars}
            comment={comment.comment}
            user={comment.name}
            created_at={comment.created_at}
          />
        ))}
      </div>
    </section>
  );
};

export default CommentsList;
