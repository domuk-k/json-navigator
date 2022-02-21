import Link from 'next/link';

interface MainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <main className="bg-slate-900 h-screen ">
      <div className="grid gap-4 p-24">
        <div className="flex flex-row justify-between">
          <h1 className="text-5xl text-slate-200">
            <Link href="/">JSON navigator</Link>
          </h1>
        </div>
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
