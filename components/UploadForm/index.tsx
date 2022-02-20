import React, { useCallback, useState, type FormEvent } from 'react';

import useReadFileAsJSON from 'hooks/useReadFileAsJSON';

const UploadForm = () => {
  const [loadedJSON, setLoadedJSON] = useState<object>();

  const { readAsJSON, data } = useReadFileAsJSON();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) {
        return;
      }
      event.preventDefault();

      readAsJSON(file, {
        onLoad: (data) => {
          setLoadedJSON(data);
        },
        // FIXME: 적절한 에러 분기 및 UI 표시 - effect 함수전달
        onError: alert,
      });
    },
    [readAsJSON]
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
