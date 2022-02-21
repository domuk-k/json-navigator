import Link from 'next/link';
import { useRouter } from 'next/router';

import { useLoadedJSON } from 'context/loadedJSON';

import Directories from '../Directories';

const Navigator = () => {
  const { loadedJSON } = useLoadedJSON();
  const router = useRouter();

  const paths = router.query.all;

  if (!loadedJSON || !Array.isArray(paths)) {
    return <Link href="/">파일을 업로드해주세요</Link>;
  }

  return (
    <div className="flex flex-row divide-x divide-slate-700 mt-10">
      {paths.map((path, index, paths) => (
        <Directories
          key={path}
          value={loadedJSON}
          path={paths.slice(0, index + 1)}
        />
      ))}
    </div>
  );
};

export default Navigator;
