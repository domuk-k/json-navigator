interface MainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <main className="bg-slate-900 h-screen ">
      <div className="grid gap-4 p-24">{children}</div>
    </main>
  );
};

export default MainLayout;
