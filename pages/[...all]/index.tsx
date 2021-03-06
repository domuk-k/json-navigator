import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MainLayout from 'layouts';
import Navigator from '@/components/Navigator';
import Header from '@/components/Header';
import { useUIContext } from '@/context/ui';

const LocatorPage: NextPage = () => {
  const router = useRouter();
  const { navigatingMode } = useUIContext();

  const paths = router.query.all;
  const navigatingPath =
    paths && Array.isArray(paths) ? paths.join(' › ') : paths;

  return (
    <MainLayout>
      <Header />
      {navigatingMode === 'horizontal' && (
        <h2 className="text-3xl text-gray-400">{navigatingPath}</h2>
      )}
      <Navigator />
    </MainLayout>
  );
};

export default LocatorPage;
