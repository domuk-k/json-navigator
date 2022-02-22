import { useLoadedJSON } from '@/context/loadedJSON';
import { useUIContext } from '@/context/ui';

const Switch = () => {
  const { loadedJSON } = useLoadedJSON();
  const { navigatingMode, toggleNavigatingMode } = useUIContext();

  if (!loadedJSON) {
    return null;
  }
  return (
    <button
      className="inline-block items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-5 focus:outline-none focus:ring-2  dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 my-2"
      onClick={toggleNavigatingMode}
    >
      {navigatingMode === 'horizontal' ? '세로로 보기' : '가로로 보기'}
    </button>
  );
};

export default Switch;
