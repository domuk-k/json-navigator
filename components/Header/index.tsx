import dynamic from 'next/dynamic';
import Link from 'next/link';

import Switch from './Switch';

const UploadForm = dynamic(() => import('@/components/UploadForm'), {
  ssr: false,
});

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center ">
      <div className="flex flex-row items-center flex-wrap">
        <h1 className="mr-12 text-5xl text-slate-200">
          <Link href="/">JSON navigator</Link>
        </h1>
        <UploadForm />
        <Switch />
      </div>
    </div>
  );
};

export default Header;
