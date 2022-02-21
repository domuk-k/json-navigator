import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { useLoadedJSON } from 'context/loadedJSON';
import useReadFileAsJSON from 'hooks/useReadFileAsJSON';

const UploadForm = () => {
  const { setLoadedJSON } = useLoadedJSON();

  const router = useRouter();

  const { loadFileAsync } = useReadFileAsJSON({
    onLoad: (data) => {
      setLoadedJSON(data);
    },
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) {
        return;
      }

      loadFileAsync(file).then(() => {
        router.push(`${file.name.replace('.json', '')}`);
      });
    },
    [loadFileAsync, router]
  );

  return (
    <form className="flex flex-col mt-3" id="upload">
      <label className="hidden text-3xl" htmlFor="file">
        업로드할 파일
      </label>
      <input
        className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
           file:text-sm file:font-semibold
             file:bg-slate-700 file:text-slate-200
             hover:file:bg-slate-600 
           "
        type="file"
        accept=".json"
        onChange={handleChange}
      />
    </form>
  );
};

export default UploadForm;
