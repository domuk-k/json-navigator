import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import MainLayout from 'layouts';

const UploadForm = dynamic(() => import('@/components/UploadForm'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <MainLayout>
      <UploadForm />
    </MainLayout>
  );
};

export default Home;
