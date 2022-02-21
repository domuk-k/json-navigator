import type { NextPage } from 'next';

import MainLayout from 'layouts';
import Navigator from '@/components/Navigator';
import { useRouter } from 'next/router';

const LocatorPage: NextPage = () => {
  const router = useRouter();

  const paths = router.query.all;
  const fileName = Array.isArray(paths) ? paths[0] : paths;

  return (
    <MainLayout>
      <h2 className="text-3xl text-gray-700">{fileName}</h2>
      <Navigator />
    </MainLayout>
  );
};

export default LocatorPage;
