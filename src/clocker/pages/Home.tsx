/* eslint-disable react-refresh/only-export-components */
import { memo, useContext } from 'react';
import Layout from '../Layout/Layout';
import { ClockerContext } from '../context/ClockerContext';
import CardList from '../components/CardList';
import CardsData from '../data/cardData';
import CardItem from '../components/CardItem';
import { CardProps } from '../interfaces/card.interface';

const Home = () => {
  const { user } = useContext(ClockerContext);
  return (
    <Layout>
      <div className='bg-gray-100 min-h-screen'>
        <header className='bg-green-500 py-4 m-4 max-w-7xl mx-auto'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-xl font-bold text-white'>
              ¡Bienvenido(a) {user.user_metadata.full_name}!
            </h1>
          </div>
        </header>
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <CardList>
            {CardsData.map(({ title, text, icon, path }: CardProps) => (
              <CardItem title={title} text={text} icon={icon} path={path} />
            ))}
          </CardList>
        </main>
      </div>
    </Layout>
  );
};

export default memo(Home);
