import { useMemo, useReducer } from 'react';

import { useLoadedJSON } from '@/context/loadedJSON';
import convertToTreeFromJSON from 'util/convertToTreeFromJSON';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function VerticalDirectory() {
  const { loadedJSON } = useLoadedJSON();

  const tree = useMemo(() => {
    if (!loadedJSON) return null;

    return convertToTreeFromJSON(loadedJSON);
  }, [loadedJSON]);

  if (!tree) {
    return <p className="text-white">파일을 업로드해주세요</p>;
  }

  return (
    <div className=" text-white px-4 min-w-[200px]">
      {tree.branches?.map((branch) => (
        <Directory branch={branch} key={branch.name} />
      ))}
    </div>
  );
}

const Directory = ({ branch }: { branch: Branch }) => {
  const [selected, toggle] = useReducer((x) => !x, false);

  return (
    <div
      className="text-xl pl-4 border border-slate-800 rounded-md min-w-[240px] cursor-pointer"
      key={branch.name}
    >
      <div className="flex h-10 items-center" onClick={toggle}>
        <div className="text-sm w-6 h-6">{selected ? '▶︎' : '▼'}</div>
        <span>{branch.name}</span>
      </div>
      {selected &&
        (branch.value ? (
          <div className="text-sky-400 pl-6">{branch.value}</div>
        ) : (
          <div>
            {branch.branches?.map((branch) => (
              <Directory branch={branch} key={branch.name} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default VerticalDirectory;
