import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { useLoadedJSON } from 'context/loadedJSON';
import useReadFileAsJSON from 'hooks/useReadFileAsJSON';

const UploadForm = () => {
  const { setLoadedJSON } = useLoadedJSON();

  const router = useRouter();

  const [file, setFile] = useState<File>();

  useReadFileAsJSON(file, {
    onLoad: (data) => {
      setLoadedJSON(data);
      if (file?.name) {
        router.push(`/${file.name.replace('.json', '')}`);
      }
    },
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) {
        return;
      }

      setFile(file);
    },
    []
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
