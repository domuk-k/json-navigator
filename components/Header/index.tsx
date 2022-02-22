import dynamic from 'next/dynamic';
import Link from 'next/link';

const UploadForm = dynamic(() => import('@/components/UploadForm'), {
  ssr: false,
});

const Header = () => (
  <div className="flex flex-row items-center">
    <h1 className="mr-12 text-5xl text-slate-200">
      <Link href="/">JSON navigator</Link>
    </h1>
    <UploadForm />
  </div>
);

export default Header;
