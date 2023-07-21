import { useContext, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { ClockerContext } from '../context/ClockerContext';
import EmptyState from '../components/emptyState/EmptyState';
import { CommentData } from '../data/fakeComments';

const Comments = () => {
  const [comments, setComments] = useState<CommentData[]>();
  const { handleNavbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.COMMENTS);
  }, [handleNavbarColor]);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch('http://localhost:3000/api/comments');
      const data = await response.json();
      setComments(data);
    };
    getComments();
  }, []);

  return (
    <Layout>
      <div>
        <h1 className='text-2xl'>Tus comentarios</h1>
        <hr />

        {!comments ? (
          <EmptyState />
        ) : (
          comments?.map((comment) => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>{comment.user_assigned_id}</p>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Comments;
