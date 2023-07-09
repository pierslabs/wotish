/* eslint-disable react-refresh/only-export-components */
import { memo, useContext, useRef } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';
import CardList from '../components/common/CardList';
import CardsData from '../data/cardData';
import CardItem from '../components/common/CardItem';
import { CardProps } from '../interfaces/card.interface';

const Home = () => {
  const { profile } = useContext(ClockerContext);
  const countRef = useRef(0);

  console.log('Home render', countRef.current++);
  return (
    <Layout>
      <div className='bg-gray-100 min-h-screen'>
        <header className='bg-green-500 py-4 m-4 max-w-7xl mx-auto'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-xl font-bold text-white'>
              ¡Bienvenido(a) {profile?.full_name}!
            </h1>
          </div>
        </header>
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <CardList>
            {CardsData.map(({ title, text, icon, path, key }: CardProps) => (
              <CardItem
                key={key}
                title={title}
                text={text}
                icon={icon}
                path={path}
              />
            ))}
          </CardList>
        </main>
      </div>
    </Layout>
  );
};

export default memo(Home);
