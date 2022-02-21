import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

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
