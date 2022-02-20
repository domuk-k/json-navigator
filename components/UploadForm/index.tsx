import React, { useCallback } from 'react';

import useReadFileAsJSON from 'hooks/useReadFileAsJSON';
import { useLoadedJSON } from 'context/loadedJSON';

const UploadForm = () => {
  const { setLoadedJSON } = useLoadedJSON();

  const { readAsJSON } = useReadFileAsJSON();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      const file = event.target.files?.[0];

      if (!file) {
        return;
      }

      readAsJSON(file, {
        onLoad: setLoadedJSON,
        // FIXME: 적절한 에러 분기 및 UI 표시 - effect 함수전달
        onError: alert,
      });
    },
    [readAsJSON, setLoadedJSON]
  );

  return (
    <form className="flex flex-col" id="upload">
      <label htmlFor="file">업로드할 파일</label>
      <input
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
            file:text-sm file:font-semibold
             file:bg-violet-50 file:text-violet-700
             hover:file:bg-violet-100
           "
        type="file"
        accept=".json"
        onChange={handleChange}
      />
    </form>
  );
};

export default UploadForm;
