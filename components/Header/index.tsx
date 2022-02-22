import { useUIContext } from '@/context/ui';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import Switch from './Switch';

const UploadForm = dynamic(() => import('@/components/UploadForm'), {
  ssr: false,
});

const Header = () => {
  const { navigatingMode, toggleNavigatingMode } = useUIContext();

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <h1 className="mr-12 text-5xl text-slate-200">
          <Link href="/">JSON navigator</Link>
        </h1>
        <UploadForm />
      </div>
      <Switch
        checked={navigatingMode === 'horizontal'}
        onClick={toggleNavigatingMode}
      />
    </div>
  );
};

export default Header;
