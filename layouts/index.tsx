import Link from 'next/link';

interface MainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <main className="bg-slate-900 h-screen text-gray-400">
      <div className="grid gap-10 p-24">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl">
            <Link href="/">JSON navigator</Link>
          </h1>
        </div>
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
