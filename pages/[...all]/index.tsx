import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MainLayout from 'layouts';
import Navigator from '@/components/Navigator';
import Header from '@/components/Header';

const LocatorPage: NextPage = () => {
  const router = useRouter();

  const paths = router.query.all;
  const fileName = paths && Array.isArray(paths) ? paths.join('/') : paths;

  return (
    <MainLayout>
      <Header />
      <h2 className="text-3xl text-gray-400">{fileName}</h2>
      <Navigator />
    </MainLayout>
  );
};

export default LocatorPage;
