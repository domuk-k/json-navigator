import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Navigator from '@/components/Navigator';

const UploadForm = dynamic(() => import('@/components/UploadForm'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <main className="grid gap-10 p-24">
      <h1 className="text-2xl">JSON navigator</h1>
      <UploadForm />
      <Navigator />
    </main>
  );
};

export default Home;
