import UploadForm from '../components/UploadForm';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-2xl mb-8">JSON navigator</h1>
      <UploadForm />
    </main>
  );
};

export default Home;
