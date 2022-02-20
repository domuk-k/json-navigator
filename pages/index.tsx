import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const UploadForm = dynamic(() => import('../components/UploadForm'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-2xl mb-8">JSON navigator</h1>
      <UploadForm />
    </main>
  );
};

export default Home;
