import type { NextPage } from 'next';

import Header from '@/components/Header';
import MainLayout from 'layouts';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />
    </MainLayout>
  );
};

export default Home;
