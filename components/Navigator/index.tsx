import { useUIContext } from '@/context/ui';
import { useRouter } from 'next/router';

import HorizontalDirectory from './HorizontalDirectory';
import VerticalDirectory from './VerticalDirectory';

const Navigator = () => {
  const { navigatingMode } = useUIContext();

  const router = useRouter();

  const currentDirectoryQueries = router.query.all;

  if (!Array.isArray(currentDirectoryQueries)) {
    return <p className="text-white">파일을 업로드해주세요</p>;
  }

  return (
    <div className="flex flex-row divide-x divide-slate-700 mt-10">
      {navigatingMode === 'horizontal' ? (
        currentDirectoryQueries.map((path, index, paths) => (
          <HorizontalDirectory
            name={currentDirectoryQueries[index + 1]}
            key={path}
            path={paths.slice(0, index + 1)}
          />
        ))
      ) : (
        <VerticalDirectory />
      )}
    </div>
  );
};

export default Navigator;
